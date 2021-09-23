import { initialState } from "../store/initialState";
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case "FETCH_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        category: action.err,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
