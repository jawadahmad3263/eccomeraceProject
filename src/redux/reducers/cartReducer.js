import { initialState } from "../store/initialState";
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartData:[...state.cartData,action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        cartData:[...state.cartData.filter(data=>data.id!==action.payload)]
      };
 
    default:
      return state;
  }
};
export default cartReducer;
