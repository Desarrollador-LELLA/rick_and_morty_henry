import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Detail from './pages/Detail.jsx';
import { useState, useEffect } from 'react';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import { usuarios } from './data';
import Registrar from './pages/Registrar';
import { useSelector } from 'react-redux';

function App() {

  const { authenticated } = useSelector(state => state.auths)

  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.filter((x) => x.id === data.id).length !== 0) {
            window.alert('El personajes con ese ID ya fue agregado');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((x) => x.id !== id));
  };

  const onClickMenuCerrar = () => {
    var intro = document.getElementById('menu-lienzo');
    intro.style.display = 'none';
  };

  const onLogin = (usuario, pass) => {
    // console.log(usuario, pass);
    // const filtro = usuarios.filter((x) => x.usuario === usuario);
    // if (filtro.length) {
    //   if (filtro[0].password === pass) {
    //     setAccess({ aproved: true, usuario: { nombre: filtro[0].name } });
    //     navigate('/home');
    //   } else {
    //     alert('La Clave es Incorrecta');
    //   }
    // } else {
    //   alert('El Usuario no existe');
    // }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout onSearch={onSearch} onClickMenuCerrar={onClickMenuCerrar} />} >
          <Route index element={!authenticated ? <Login  /> : <Navigate to='/home' />} exact />
          <Route path='registro' element={!authenticated ? <Registrar /> : <Navigate to='/home' />} exact />
          <Route path="home" element={authenticated ? <Home characters={characters} onClose={onClose} exact /> : <Navigate to='/' />} />
          <Route path="about" element={authenticated ? <About /> : <Navigate to='/' />} exact />
          <Route path="detail/:detailid" element={authenticated ? <Detail /> : <Navigate to='/' />} exact />
          <Route path="favorites" element={authenticated ? <Favorites /> : <Navigate to='/' />} exact />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
Generar un botón en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).

REDIRECCIONAR BIEN LOGIN AL NO ESTAR LOGEADO

EJERCICIO EXTRA
Ahora te desafiamos a que crees un botón "Logout" en tu componente <Nav />. Si lo presionas debe quitar los permisos de acceso y redirigirte automáticamente a tu componente <Form />.
PISTA: lo puedes hacer creando una función logout en tu archivo App.js.
*/
