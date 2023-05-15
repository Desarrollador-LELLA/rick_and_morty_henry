import React, { useState, useEffect } from 'react';
import s from '../cssmodulos/login.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogeaUsuario, setError } from '../redux/authActions';

export function validate({ correo, password }) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (password.toString().trim().length === 0) {
        errors.password = 'La Contraseña es Obligatoria';
    } else if (password.toString().trim().length < 6 || password.toString().trim().length > 10) {
        errors.password = 'La constraseña no puede ser menor a 6 caraceres y mayor a 10';
    }
    if (correo.toString().trim().length === 0) {
        errors.correo = 'El Usuario es Obligatorio';
    } else if (!regexEmail.test(correo)) {
        errors.correo = 'Debe ser un correo electrónico valido';
    } else if (correo.toString().trim().length > 35) {
        errors.correo = 'El usuario no puede tener mas de 35 caracteres';
    }

    return errors;
}

const STATE_INITIAL = {
    correo: '',
    password: '',
};

function Login() {

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
            dispatch(actionLogeaUsuario(userData, registrados));
        }
    };

    const handleBlur = () => {
        setErrors(validate(userData));
    };

    return (
        <div className={s['login-contenedor']}>
            <form onSubmit={handleSubmit}>
                <h1>Inicio de Sesion</h1>
                <div className={s['login-row']}>
                    <div>
                        <label>Usuario</label>
                        <input className={errors.correo && s.warning} name='correo' type='text' value={userData.username} onChange={onChange} placeholder="Ej: micorreo@dominio.cl" onBlur={handleBlur} autoFocus></input>
                        {errors.correo && <p className={s.danger}>{errors.correo}</p>}
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input className={errors.password && s.warning} name='password' type='password' value={userData.password} onChange={onChange} placeholder="Escribe tu Contraseña" onBlur={handleBlur}></input>
                        {errors.password && <p className={s.danger}>{errors.password}</p>}
                    </div>
                    <button types='submit'>Login</button>
                    {error && <p className={s.danger}>{error}</p>}
                </div>
            </form>
            <div className={s['login-span']}>
                <NavLink to='/registro'>
                    No Tengo Cuenta
                </NavLink>
            </div>
        </div>
    );
}

export default Login;