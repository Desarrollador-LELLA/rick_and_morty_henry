import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../cssmodulos/registrar.module.css';
import { setError, actionRegistraUsuario } from '../redux/authActions';
import { NavLink } from 'react-router-dom';

export function validate({ nombre, correo, password, rpassword }) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (nombre.toString().trim().length === 0) {
        errors.nombre = 'El Nombre es obligatorio';
    }
    if (password.toString().trim().length === 0) {
        errors.password = 'La Contraseña es obligatoria';
    } else if (password.toString().trim().length < 6 || password.toString().trim().length > 10) {
        errors.password = 'La constraseña no puede ser menor a 6 caraceres y mayor a 10';
    }
    if (rpassword.toString().trim().length === 0) {
        errors.rpassword = 'La Re - Contraseña es obligatoria';
    } else if (password !== rpassword) {
        errors.rpassword = 'La Contraseña y Re - Contraseña no son iguales';
    }

    if (correo.toString().trim().length === 0) {
        errors.correo = 'El Correo es obligatorio';
    } else if (!regexEmail.test(correo)) {
        errors.correo = 'Debe ser un correo electrónico valido';
    } else if (correo.toString().trim().length > 35) {
        errors.correo = 'El correo no puede tener mas de 35 caracteres';
    }

    return errors;
}

const STATE_INITIAL = {
    nombre: '',
    correo: '',
    password: '',
    rpassword: '',
};

const Registrar = () => {

    const [userData, setUserData] = useState(STATE_INITIAL);
    const [errors, setErrors] = useState({});
    const { registrados, error } = useSelector(state => state.auths);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        };
    }, [error, dispatch]);

    const onChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value,
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            dispatch(actionRegistraUsuario(userData, registrados));
        }
    };

    const handleBlur = () => {
        setErrors(validate(userData));
    };

    return (
        <div className={s['registrar-contenedor']}>
            <form onSubmit={handleSubmit}>
                <h1>Registrarme</h1>
                <div className={s['registrar-row']}>
                    <div>
                        <label>Nombre</label>
                        <input name='nombre' type='text' value={userData.nombre} onChange={onChange} placeholder="Ej: Juan Perez" onBlur={handleBlur} autoFocus={true}></input>
                        {errors.nombre && <p className={s.danger}>{errors.nombre}</p>}
                    </div>
                    <div>
                        <label>Correo</label>
                        <input name='correo' type='text' value={userData.correo} onChange={onChange} placeholder="Ej: micorreo@dominio.cl" onBlur={handleBlur}></input>
                        {errors.correo && <p className={s.danger}>{errors.correo}</p>}
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input name='password' type='password' value={userData.password} onChange={onChange} placeholder="Escribe una Contraseña" onBlur={handleBlur}></input>
                        {errors.password && <p className={s.danger}>{errors.password}</p>}
                    </div>
                    <div>
                        <label>Re - Contraseña</label>
                        <input name='rpassword' type='password' value={userData.rpassword} onChange={onChange} placeholder="Re-Escribe tu Contraseña" onBlur={handleBlur}></input>
                        {errors.rpassword && <p className={s.danger}>{errors.rpassword}</p>}
                    </div>
                    <button types='submit'>Registrarme</button>
                    {error && <p className={s.danger}>{error}</p>}
                </div>
            </form>
            <div className={s['registrar-span']}>
                <NavLink to='/'>
                    Ya tengo Cuenta
                </NavLink>
            </div>
        </div>
    );
};

export default Registrar;