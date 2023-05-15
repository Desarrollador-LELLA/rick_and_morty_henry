import React from 'react';
import s from '../cssmodulos/menuizquierda.module.css';
import BotonIcono from './BotonIcono.jsx';
import imgMenu from '../imagenes/ic_menu.svg';

function MenuLateral(porps) {

    const onClick = () => {
        var intro = document.getElementById('menu-lienzo');
        intro.style.display = 'flex';
    };

    return (
        <div className={s['menu-contenedor']}>
            <BotonIcono icono={imgMenu} alts='Menu' onClicks={onClick} />
        </div>
    );
}

export default MenuLateral;