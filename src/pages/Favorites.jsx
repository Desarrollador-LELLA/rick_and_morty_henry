import React from 'react';
import { useSelector } from 'react-redux';
import CardFavorita from '../components/CardFavorita';
import s from '../cssmodulos/favoritos.module.css';

function Favorites(props) {

    const { myFavorites } = useSelector(state => state.cards)

    return (
        <div className={s.contenedor}>
            <h1>Favoritos</h1>
            {myFavorites.length === 0 ?
                <div className={s.sincards}>
                    <h3>Sin Cards Favoritas Agregadas</h3>
                </div>
                :
                <div className={s.cards}>
                    {
                        myFavorites.map(x => {
                            return <CardFavorita
                                name={x.name}
                                species={x.species}
                                gender={x.gender}
                                image={x.image}
                                key={x.id} />;
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Favorites;