import { combineReducers } from "redux";

import allProductsReducer from './allProductsReducer';
import categoriesReducer from "./categoriesReducers";

const rootReducer  = combineReducers({
    allProductsReducer,
    categoriesReducer,
})

export default rootReducer;