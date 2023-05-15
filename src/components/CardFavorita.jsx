import React from 'react';
import s from '../cssmodulos/cardfavorita.module.css';

const CardFavorita = ({ name, species, gender, image }) => {
    return (
        <div>
            <div className={s.card}>
                <div className={s.titulo}>
                    <h2>{name}</h2>
                </div>
                <h2>{species}</h2>
                <h2>{gender}</h2>
                <img src={image} alt={name} />
            </div>
        </div>
    );
};

export default CardFavorita;