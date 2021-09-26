import React from "react";
import { Link } from "react-router-dom";
import Styles from "./totalPrice.module.css";
function TotalPrice() {
  return (
    <div className={`${Styles.mainPriceWrapper}`}>
      <h5> Total Number of Products</h5>

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
        <p>
          <b className="h5">The Total Amount</b> <br /> including (shipping)
        </p>
        <p>$310</p>
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
