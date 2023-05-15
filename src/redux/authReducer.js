import {
  REGISTRA_USUARIO,
  LOGEA_USUARIO,
  DESLOGEAR,
  SET_LOADING,
  SET_ERROR,
  SET_SUCCESS,
} from './types';

const initialState = {
  registrados: [],
  user: null,
  authenticated: false,
  error: '',
  success: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRA_USUARIO:
      return {
        ...state,
        registrados: [...state.registrados, action.payload],
      };
    case LOGEA_USUARIO:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case DESLOGEAR:
      return {
        ...state,
        user: null,
        authenticated: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
