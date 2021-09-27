import React from "react";
import TotalPrice from "../../../components/totalprice/TotalPrice";
import ShoppingCart from '../../../components/shoppingcart/container/ShoppingCart';
import Styles from "../assets/css/Cart.module.css";
export default function CartPageUi(props) {
  return (
    <div className={` container ${Styles.mainCartWrapper}`}>
    
    
  
      <ShoppingCart/>
      <TotalPrice />
    </div>
  );
}
