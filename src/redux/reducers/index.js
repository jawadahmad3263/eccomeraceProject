import { combineReducers } from "redux";

import allProductsReducer from './allProductsReducer';
import categoriesReducer from "./categoriesReducers";
import authenticateUserReducer from './authenticateUserReducer';

const rootReducer  = combineReducers({
    allProductsReducer,
    categoriesReducer,
    authenticateUserReducer,
})

export default rootReducer;