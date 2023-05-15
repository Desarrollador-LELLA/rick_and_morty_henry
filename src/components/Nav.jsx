import Logo from '../components/Logo.jsx';
import SearchBar from "./SearchBar.jsx";
import s from '../cssmodulos/nav.module.css';
import { NavLink } from 'react-router-dom';
import BotonIcono from './BotonIcono.jsx';
import imgAdd from '../imagenes/ic_add.svg';
import imgRandom from '../imagenes/ic_random.svg';
import imgAproved from '../imagenes/ic_aprobar.svg';
import imgCerrar from '../imagenes/ic_close.svg';
import imgCerrarSesion from '../imagenes/ic_cerrar_sesion.svg'
import MenuLateral from './MenuLateral.jsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDeslogeaUsuario } from '../redux/authActions'

function Nav(props) {

    const { authenticated } = useSelector(state => state.auths)
    const dispatch = useDispatch();
    const { onSearch } = props;

    const [id, setId] = useState('');

    const onClickMenuAdd = () => {
        var intro = document.getElementById('menuoculto-lienzo');
        intro.style.display = 'flex';
    };

    const onClickMenuCerrar = () => {
        var intro = document.getElementById('menuoculto-lienzo');
        intro.style.display = 'none';
    };

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

    if(!authenticated) return null

    return (
        <nav className={s.navbar}>
            <MenuLateral />
            <Logo claseNombre={s.logo} />
            <div className={s.menu}>
                <NavLink to='/home'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/favorites'>
                    Favorites
                </NavLink>
            </div>
            <div className={s.menuagregar}>
                <SearchBar onSearch={onSearch} />
            </div>
            <div className={s.menuagregaroculto}>
                <BotonIcono onClicks={onClickMenuAdd} icono={imgAdd} alts='Agregar' />
                <div className={s['menuagregaroculto-lienzo']} id='menuoculto-lienzo'>
                    <form onSubmit={handleSubmit}>
                        <input type='search' onChange={onChange} />
                        <BotonIcono types='submit' icono={imgAproved} alts='Agregar' />
                    </form>
                    <BotonIcono onClicks={onClickMenuCerrar} icono={imgCerrar} alts='Cerrar' />
                </div>
                <BotonIcono icono={imgRandom} alts='Agregar Random' onClicks={random} />
                <BotonIcono icono={imgCerrarSesion} alts='Cerrar Sesion' onClicks={cerrarSesion} />
            </div>
        </nav>
    );
}

export default Nav;