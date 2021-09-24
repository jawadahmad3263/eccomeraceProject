import { initialState } from "../store/initialState";
const electronicCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ELECTRONIC_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ELECTRONIC_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        electronics: action.payload,
      };
    case "FETCH_ELECTRONIC_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        electronics: action.err,
      };
    default:
      return state;
  }
};

export default electronicCategoriesReducer;
