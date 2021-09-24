import { initialState } from "../store/initialState";
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JEWELERY_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_JEWELERY_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        jewelary: action.payload,
      };
    case "FETCH_JEWELERY_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        jewelary: action.err,
      };
    case "FETCH_MEN'S CLOTHING_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_MEN'S CLOTHING_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        menClothes: action.payload,
      };
    case "FETCH_MEN'S CLOTHING_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        menClothes: action.err,
      };
    case "FETCH_WOMEN'S CLOTHING_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_WOMEN'S CLOTHING_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        womenClothes: action.payload,
      };
    case "FETCH_WOMEN'S CLOTHING_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        womenClothes: action.err,
      };
    case "FETCH_ELECTRONICS_CATEGORY_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ELECTRONICS_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        electronics: action.payload,
      };
    case "FETCH_ELECTRONICS_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        electronics: action.err,
      };
    default:
      return state;
  }
};

export default categoryReducer;
