import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./totalPrice.module.css";
import { useSelector } from "react-redux";
function TotalPrice() {
  const addedItems = useSelector((state) => state.cartReducer.cartData);
  const [total, setTotal] = useState(0);
 useEffect(()=>{
   calculate();
 },[addedItems])
  const calculate = () => {
    var net = 0;
    addedItems.forEach((item) => {
      net = net + item.price * item.quantity;
    });

    setTotal(net);
  };

  return (
    <div className={`${Styles.mainPriceWrapper}`}>
      <h5> Total Number of Products {addedItems.length}</h5>

      <div className={Styles.priceContent}>
        <div className={Styles.totalProduct}>
          <div className={Styles.totalPriceStyle}>
            <p>Product Name </p>
            <p>Qty</p>
            <p>$Total Price</p>
          </div>
          {addedItems?.map((item, index) => {
            let name = item.title.slice(0, 10);
            return (
              <div className={Styles.totalPriceStyle}>
                <p>{name}</p>
                <p>{item.quantity}</p>
                <p>${item.quantity * item.price}</p>
              </div>
            );
          })}
        </div>
        <div className={Styles.totalPriceStyle}>
          <p>Shipping Charges</p>
          <p>$10</p>
        </div>
      </div>
      <div className={Styles.totalamount}>
        <p>
          <b>The Total Amount</b> <br /> including
          (shipping)
        </p>
        {total!==0?
        <p>${total+10}</p>:""}
      </div>
      <div className={Styles.checkoutPageButton}>
        <Link
          to="/checkout"
          className={`btn btn-outline-primary text-uppercase ${Styles.btnStyle} `}
        >
          Checkout Page
        </Link>
      </div>
    </div>
  );
}

export default TotalPrice;
