import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cardReducer from '../redux/reducer';
import authReducer from '../redux/authReducer'

const rootReducer = combineReducers({
   cards: cardReducer,
   auths: authReducer,
 });

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);

export default store;