import { ADD_PERSON, ADD_PERSON_FAVORITES, DELETE_PERSON_FAVORITES } from './types';

const initialState = {
  cartas: [], 
  myFavorites: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case DELETE_PERSON_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((x) => x.id !== action.payload),
      };
      case ADD_PERSON:
      return {
        ...state,
        cartas: [...state.cartas, action.payload],
      };
    default:
      return state;
  }
};

export default cardReducer;
