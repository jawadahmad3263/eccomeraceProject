import React from "react";
import Styles from "./shipping.module.css";
import {Link} from "react-router-dom";
function Shipping() {
  return (
    <div className={`container ${Styles.mainWrapper}`}>
      <h3>Shipping Address</h3>
      <div className={Styles.mainBillingWrapper}>
          <div className={Styles.formWrapper}>
              <form className={Styles.formStyle}>
                 <div className={Styles.formContent}>
                     <label>Full Name</label>
                     <input type="text" placeholder="Enter full Name"  className={Styles.InputStyle} />
                 </div>
                 <div className={Styles.formContent}>
                     <label>Email</label>
                     <input type="email" placeholder="Your Email"  />
                 </div>
                 <div className={Styles.formContent}>
                     <label>Address</label>
                     <input type="text" placeholder="Complete Address"  />
                 </div>
                 <div className={Styles.formContent}>
                     <label>City</label>
                     <input type="text" placeholder="Enter full Name"  />
                 </div>
                 <div className={Styles.formContent}>
                     <label>Postal Code</label>
                     <input type="number" placeholder="Enter full Name"  />
                 </div>
                 <div className={Styles.formContent}>
                     
                      <Link to="/products" style={{width:400}} className={Styles.linkStyle}>Continoue To Shopping  </Link>
                     
                 </div>
              </form>
         
          <div className={Styles.paymentWrapper}>
              <h3>Billing Address</h3>
              <form className={Styles.formStyle}> 
              <div className={Styles.formContent}>
                     <label>Name On Card</label>
                     <input type="text" placeholder="Enter full Name"  />
                 </div>
                 <div className={Styles.formContent}>
                     <label>Credit card number</label>
                     <input type="number" placeholder="1111-2222-3333-4444"  />
                 </div>
                 <div className={Styles.formContent}>
                     <label>Exp Month</label>
                     <input type="text" placeholder="September"  />
                 </div>
                 <div className={Styles.formContent}>
                     <label>CVV</label>
                     <input type="number" placeholder="352"  />
                 </div>
                 <div className={Styles.formContent}>
              
                     <input type="Submit" value="Submit"  className="py-2"  />
                 </div>
              </form>
          </div>
          </div>

      </div>

     
    </div>
  );
}

export default Shipping;
