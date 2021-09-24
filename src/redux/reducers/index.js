import { combineReducers } from "redux";

import allProductsReducer from './allProductsReducer';
import jewelaryCategoryReducer from "./jewelaryCategoryReducer";
import authenticateUserReducer from './authenticateUserReducer';
import menCategoriesReducer from './menCategoriesReducer';
import womenCategoriesReducer from './womenCategoriesReducer';
import electronicCategoriesReducer from './electronicCategoriesReducer'

const rootReducer  = combineReducers({
    allProductsReducer,
    jewelaryCategoryReducer,
    authenticateUserReducer,
    menCategoriesReducer,
    womenCategoriesReducer,
    electronicCategoriesReducer,
})

export default rootReducer;