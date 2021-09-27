import React, { useEffect, useState } from "react";
import CardUi from "../UI/CardUi";
import { useDispatch, useSelector } from "react-redux";
import cartAction from "../../../redux/actions/cartAction";
export default function Card(props) {
  //  const [checkItem,setCheckItem] = useState(false)
  const dispatch = useDispatch();
  const { product, index } = props;

  var checkItem = false;
  //fun to add selected items to cart
  const addItem = () => {
    product["quantity"] = 1;
    dispatch(cartAction.Add(product));
  };
  const addedItems = useSelector((state) => state.cartReducer.cartData);
  const products = useSelector((state) => state.allProductsReducer.allProducts);

  //check if item is added to cart before

  addedItems?.find((item, index) => {
    if (item.id === product.id) {
      checkItem = true;
    }
  });


  return (
    <CardUi
      product={product}
      index={index}
      addItem={addItem}
      checkItem={checkItem}
    />
  );
}
