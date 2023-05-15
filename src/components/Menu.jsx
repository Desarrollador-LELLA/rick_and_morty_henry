import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../cssmodulos/menuizquierda.module.css';
import BotonIcono from '../components/BotonIcono';
import imgCerrar from '../imagenes/ic_close.svg';
import { useSelector } from 'react-redux';

function Menu({ onClickMenuCerrar }) {
    
    const { authenticated } = useSelector(state => state.auths)

    const cerrar = () => {
        onClickMenuCerrar();
    }

    if(!authenticated) return null
    
    return (
        <div className={s['menu-lienzo']} id="menu-lienzo">
            <div className={s['menu-items']}>
                <div>
                    <span>Menu</span>
                    <BotonIcono icono={imgCerrar} onClicks={onClickMenuCerrar} />
                </div>
                <NavLink to="/" onClick={cerrar}>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/about" onClick={cerrar}>
                    <span>About</span>
                </NavLink>
                <NavLink to='/favorites' onClick={cerrar}>
                    <span>Favorites</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;