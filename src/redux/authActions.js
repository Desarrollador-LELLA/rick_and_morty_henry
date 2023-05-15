import {
  REGISTRA_USUARIO,
  LOGEA_USUARIO,
  DESLOGEAR,
  SET_LOADING,
  SET_ERROR,
  SET_SUCCESS,
} from '../redux/types';

const actionRegistraUsuario =
  ({ nombre, correo, password }, usuarios) =>
  (dispatch) => {
    try {
      const registrado = usuarios.filter((x) => x.correo === correo);
      if (registrado.length === 0) {
        const newUsuario = {
          nombre: nombre,
          correo: correo,
          password: password,
        };
        dispatch({
          type: REGISTRA_USUARIO,
          payload: newUsuario,
        });
        dispatch({
          type: LOGEA_USUARIO,
          payload: { nombre: nombre },
        });
      } else {
        throw new Error('El Correo ya esta registrado');
      }
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message,
      });
    }
  };

const actionLogeaUsuario =
  ({ correo, password }, usuarios) =>
  (dispatch) => {
    try {
      const registrado = usuarios.filter((x) => x.correo === correo);
      if (registrado.length > 0) {
        if (registrado[0].password === password) {
          const newUsuario = {
            correo: correo,
            password: password,
          };
          dispatch({
            type: LOGEA_USUARIO,
            payload: { nombre: registrado[0].nombre },
          });
        } else {
          throw new Error('La Contraseña es Incorrecta');
        }
      } else {
        throw new Error('El Correo no se encuentra registrado');
      }
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message,
      });
    }
  };

const actionDeslogeaUsuario = () => {
  return {
    type: DESLOGEAR,
  };
};

const setError = (msg) => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: msg,
  });
};

export {
  actionRegistraUsuario,
  actionLogeaUsuario,
  actionDeslogeaUsuario,
  setError,
};
