import React from "react";
import ShoppingCartUi from "../Ui/ShoppingCartUi";
import { useDispatch, useSelector } from "react-redux";
import cartAction from "../../../redux/actions/cartAction";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.cartReducer.cartData);
  //funs to increase/decrease item quantity
  const quantityPlus = (id) => {
    dispatch(cartAction.quantityPlus(id));
  };
  const quantityMinus = (id) => {
    dispatch(cartAction.quantityMinus(id));
  };
  //...........................
  //fun to delete item from cart
  const deleteItem = (id) => {
    console.log("im here ", id);
    console.log(addedItems.filter((items) => items.id === id));
    dispatch(cartAction.Delete(id));
  };
  return (
      
    <ShoppingCartUi
      addedItems={addedItems}
      deleteItem={deleteItem}
      quantityPlus={quantityPlus}
      quantityMinus={quantityMinus}
    />
  );
}
