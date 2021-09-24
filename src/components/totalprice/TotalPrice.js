import React from "react";
import Styles from "./totalPrice.module.css";
function TotalPrice() {
  return (
    <div className={`${Styles.mainPriceWrapper}`}>
        <h5>The Total Amount of Items</h5>
        
      <div className={Styles.priceContent}>
        <div className={Styles.totalPriceStyle}>
          <p>Total Price </p>
          <p>$300</p>
        </div>
        <div className={Styles.totalPriceStyle}>
          <p>Shipping Charges</p>
          <p>$10</p>
        </div>
      </div>
      <div className={Styles.totalamount}>

       <p><b className="h5">The Total Amount</b> <br/> including 
       (shipping)</p>
       <p>$310</p>
      </div>
      <div className={Styles.checkoutPageButton}>
          <button className={`btn btn-outline-primary ${Styles.btnStyle} `}>Chectout Page</button>
      </div>
     
    </div>
  );
}

export default TotalPrice;
