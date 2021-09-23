import { initialState } from "../store/initialState";
const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    default:
      return state;
  }
};
export default allProductsReducer;
