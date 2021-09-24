import { initialState } from "../store/initialState";
const menCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEN_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_MEN_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        menClothes: action.payload,
      };
    case "FETCH_MEN_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        menClothes: action.err,
      };
    default:
      return state;
  }
};

export default menCategoriesReducer;
