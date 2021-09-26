import { combineReducers } from "redux";

import allProductsReducer from "./allProductsReducer";
import categoryReducer from "./categoryReducer";
import authenticateUserReducer from "./authenticateUserReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  allProductsReducer,
  categoryReducer,
  authenticateUserReducer,
  cartReducer,
});

export default rootReducer;
