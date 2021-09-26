import { combineReducers } from "redux";

import allProductsReducer from "./allProductsReducer";
import categoryReducer from "./categoryReducer";
import authenticateUserReducer from "./authenticateUserReducer";
import cartReducer from "./cartReducer";
import singleProductReducer from "./singleProductReducer";

const rootReducer = combineReducers({
  allProductsReducer,
  categoryReducer,
  authenticateUserReducer,
  cartReducer,
  singleProductReducer,
});

export default rootReducer;
