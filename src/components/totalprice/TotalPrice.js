import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./totalPrice.module.css";
import { useSelector } from "react-redux";
function TotalPrice() {
  const addedItems = useSelector((state) => state.cartReducer.cartData);
  var [total,setTotal]=useState(0);
  
// useEffect(()=>{
//     addedItems.map((item)=>{
//     return  total=total+(item.price*item.quantity)
//     })
  
// },[addedItems.quantity])
    const calculate=()=>{

     for(var i=0;i<addedItems.length;i++)
     {
      setTotal(total+(addedItems[i].price*addedItems[i].quantity))
      console.log(addedItems[i].price*addedItems[i].quantity);
     }
   
    }

  return (
    <div className={`${Styles.mainPriceWrapper}`}>
      <h5> Total Number of Products  {addedItems.length}</h5>

      <div className={Styles.priceContent}>
        <div className={Styles.totalProduct}>
          <div className={Styles.totalPriceStyle}>
          <p>Product Name </p>
           <p>Qty</p>
          <p>$Total Price</p>
          </div>
            {addedItems?.map((item,index)=>{
               let name = item.title.slice(0,10);
              return <div className={Styles.totalPriceStyle}>
               
              <p>{name}</p>
           <p>{item.quantity}</p>
          <p>${item.quantity*item.price}</p></div>
            })}
        </div>
        <div className={Styles.totalPriceStyle}>
          <p>Shipping Charges</p>
          <p>$10</p>
        </div>
      </div>
      <div className={Styles.totalamount}>
        <p>
          <button onClick={calculate}>The Total Amount</button> <br /> including (shipping)
        </p>
        <p>${total}</p>
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
