import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from '../cssmodulos/detail.module.css';

function Detail(props) {

    const { detailid } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailid}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
    }, [detailid]);

    return (
        <div className={s['contenedor-detail']}>
            <div>
                {console.log(character)}
                <h2>{'Name: ' + character.name}</h2>
                <h3>{'Status: ' + character.status}</h3>
                <h3>{'Species: ' + character.species}</h3>
                <h3>{'Gender: ' + character.gender}</h3>
                <h3>{'Origin: ' + character.origin?.name}</h3>
            </div>
            <div>
                {/*<h1>{character.image}</h1>*/}
                <img src={character.image} alt={character.name} />
            </div>
        </div>
    );
}

export default Detail;