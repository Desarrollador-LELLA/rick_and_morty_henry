import React from 'react';
import imgDesarrollador from '../imagenes/ic_developer.png';
import s from '../cssmodulos/about.module.css';

function About(props) {
    return (
        <div className={s.contenedor}>
            <h1>
                About
            </h1>
            <div className={s['contenedor-about']}>
                <div>
                    <h2>Desarrollador: Luis</h2>
                    <h2>asdasd</h2>
                </div>
                <div>
                    <img src={imgDesarrollador} alt='Luis' />
                </div>
            </div>
        </div>
    );
}

export default About;