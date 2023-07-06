import { combineReducers } from 'redux';


import movieReducer from './movieReducer';
import favFilmReducer from './favFilmReducer';

const reducer=combineReducers({
    mo:movieReducer,
    fo:favFilmReducer
});
export default  reducer