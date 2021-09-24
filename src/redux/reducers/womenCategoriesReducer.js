import { initialState } from "../store/initialState";
const womenCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WOMEN_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_WOMEN_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        womenClothes: action.payload,
      };
    case "FETCH_WOMEN_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        womenClothes: action.err,
      };
    default:
      return state;
  }
};

export default womenCategoriesReducer;
