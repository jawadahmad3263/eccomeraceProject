import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllProductsUi from "../Ui/AllProductsUi";

import fetchAllProducts from "../../../redux/actions/fetchAllProducts";

export default function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  });
  return <AllProductsUi />;
}
