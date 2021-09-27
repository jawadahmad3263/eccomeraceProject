import { initialState } from "../store/initialState";
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        cartData: [
          ...state.cartData.filter((data) => data.id !== action.payload),
        ],
      };
    case "QUANTITY_PLUS":
      var tempArry = [...state.cartData];
      for (var i = 0; i < tempArry.length; i++) {
        if (tempArry[i].id === action.payload) {
          tempArry[i].quantity += 1;

          break;
        }
      }
      return {
        ...state,
        cartData: [...tempArry],
      };
    case "QUANTITY_MINUS":
      let tempArray = [...state.cartData];
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].id === action.payload) {
          tempArray[i].quantity -= 1;

          break;
        }
      }
      return {
        ...state,
        cartData: [...tempArray],
      };
    default:
      return state;
  }
};
export default cartReducer;
