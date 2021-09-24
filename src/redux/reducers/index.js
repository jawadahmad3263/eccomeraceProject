import { combineReducers } from "redux";

import allProductsReducer from './allProductsReducer';
import categoryReducer from "./categoryReducer";
import authenticateUserReducer from './authenticateUserReducer';
// import menCategoriesReducer from './menCategoriesReducer';
// import womenCategoriesReducer from './womenCategoriesReducer';
// import electronicCategoriesReducer from './electronicCategoriesReducer'

const rootReducer  = combineReducers({
    allProductsReducer,
    categoryReducer,
    authenticateUserReducer,
    // menCategoriesReducer,
    // womenCategoriesReducer,
    // electronicCategoriesReducer,
})

export default rootReducer;