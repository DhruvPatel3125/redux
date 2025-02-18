import {combaineReducers} from 'redux';
import { productReducer } from './productReducer';

const reducers = combaineReducers({
    allProducts:productReducer,
})