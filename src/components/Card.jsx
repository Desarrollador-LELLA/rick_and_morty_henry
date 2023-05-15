import s from '../cssmodulos/card.module.css';
import imgCerrar from '../imagenes/ic_close.svg';
import BotonIcono from './BotonIcono.jsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const { name, species, gender, image, onClose, id, myFavorites, addPersonFavorite
      , deletePersonFavorite
   } = props;

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         //dispach eliminar
         deletePersonFavorite(id);
      } else {
         setIsFav(true);
         //dispach agregar
         addPersonFavorite(props);
      }
   };

   const eliminar = () => {
      onClose(id);
   };

   return (
      <div className={s.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={s.titulo}>
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <BotonIcono onClicks={eliminar} icono={imgCerrar} alts='Cerrar' txt='' />
         </div>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.cards.myFavorites
   };
};

export const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);