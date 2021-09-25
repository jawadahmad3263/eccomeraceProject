import React from "react";
import Styles from "./shoppingCart.module.css";
import cartImage from "./images/cartImage.jpg";
function ShoppingCart() {
  return (
    <div>
      <div className={Styles.items}>
        <h4>Your's Shopping Cart Have 2 Items</h4>
      </div>
      <div className={Styles.cart_container}>
        <div className={Styles.singleCart}>
          <div className={Styles.number}>1</div>
          <div className={Styles.cartimageStyle}>
            <img src={cartImage} className={Styles.imageSize} alt="mobile" />
          </div>
          <div className={Styles.cartContentStyle}>
            <h4 className={Styles.cartName}>Mobile is Here For You </h4>
            <p>White</p>
          </div>
          
           <div>
             <div><h5>Quantity</h5></div>
           <div className={Styles.actionsStyle}>
         
         <button><i class="fas fa-plus"></i></button>
         <p className={Styles.cartQuantity}>3</p>
         <button class><i class="fas fa-minus"></i></button>
       </div>
           </div>
         
          <div className={Styles.cartContentStyle}>
            <p className="h5"> Price</p>
            <p className={Styles.price}>$200</p>
          </div>
          <div className={Styles.removeStyle}>
            <h5 className={Styles.action}>Action</h5>
            <button ><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
