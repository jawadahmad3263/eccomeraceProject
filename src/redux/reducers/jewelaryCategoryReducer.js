import { initialState } from "../store/initialState";
const jewelaryCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JEWELARY_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_JEWELARY_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        jewelary: action.payload,
      };
    case "FETCH_JEWELARY_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        jewelary: action.err,
      };
    default:
      return state;
  }
};

export default jewelaryCategoryReducer;
