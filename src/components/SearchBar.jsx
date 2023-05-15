import s from '../cssmodulos/searchbar.module.css';
import BotonIcono from './BotonIcono';
import imgBuscar from '../imagenes/ic_add.svg';
import imgRandom from '../imagenes/ic_random.svg';
import imgCerrarSesion from '../imagenes/ic_cerrar_sesion.svg';
import { useState } from 'react';
import { actionDeslogeaUsuario } from '../redux/authActions';
import { useDispatch } from 'react-redux';

function SearchBar({ onSearch }) {

   const [id, setId] = useState('');
   const dispatch = useDispatch();

   const onChange = (event) => {
      setId(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(id);
   };

   const cerrarSesion = () => {
      dispatch(actionDeslogeaUsuario());
   };

   const random = () => {
      let min = Math.ceil(1);
      let max = Math.floor(800);
      let num = Math.floor(Math.random() * (max - min) + min);
      onSearch(num);
   };

   return (
      <div className={s.searchBar}>
         <form onSubmit={handleSubmit}>
            <div className={s.searchBar}>
               <input type='search' onChange={onChange} />
               <BotonIcono types='submit' icono={imgBuscar} alts='Agregar' txt='Agregar' />
            </div>
         </form>
         <div className={s.searchBar}>
            <BotonIcono icono={imgRandom} alts='Agregar' txt='Random' onClicks={random} />
            <BotonIcono icono={imgCerrarSesion} alts='Cerrar Sesion' txt='Cerrar Sesion' onClicks={cerrarSesion} />
         </div>
      </div>
   );
}

export default SearchBar;