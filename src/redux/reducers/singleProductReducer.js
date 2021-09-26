import { initialState } from "../store/initialState";
const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        singleProduct: action.payload,
      };
    case "FETCH_SINGLE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        singleProduct: action.err,
      };

    default:
      return state;
  }
};

export default singleProductReducer;
