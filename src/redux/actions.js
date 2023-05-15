import {
  ADD_PERSON,
  ADD_PERSON_FAVORITES,
  DELETE_PERSON_FAVORITES,
} from '../redux/types';

const addPersonFavorite = (person) => {
  return {
    type: ADD_PERSON_FAVORITES,
    payload: person,
  };
};

const deletePersonFavorite = (id) => {
  return {
    type: DELETE_PERSON_FAVORITES,
    payload: id,
  };
};

const addPerson = (id, characters) => (dispatch) => {
  // try{
  //   fetch(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.name) {
  //       if (characters.filter((x) => x.id === data.id).length !== 0) {
  //         throw new Error('El personajes con ese ID ya fue agregado');
  //       } else {
  //         dispatch({
  //           type: ADD_PERSON,
  //           payload: (oldChars) => [...oldChars, data],
  //         });
  //       }
  //     } else {
  //       throw new Error('No hay personajes con ese ID');
  //     }
  //   });
  // } catch(e){
  //   dispatch({
  //     type: SET_ERROR,
  //     payload: e.message,
  //   });
  // }
};

export { addPersonFavorite, deletePersonFavorite };
