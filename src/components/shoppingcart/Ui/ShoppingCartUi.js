import React from 'react'
import Styles from "../assets/css/ShoppingCartUi.module.css";
export default function ShoppingCartUi(props) {
    const {addedItems} = props;
    return (
        <div>
            <div className={Styles.items}>
                  <h4>Your's Shopping Cart Have {addedItems.length} Items</h4>
                </div>
            {addedItems.length>0?
            <div>{addedItems.map((items,index)=>{
               return <div>
                
                <div className={Styles.cart_container}>
                  <div className={Styles.singleCart}>
                    <div className={Styles.number}>{index+1}</div>
                    <div className={Styles.cartimageStyle}>
                      <img src={items.image} className={Styles.imageSize} alt="mobile" />
                    </div>
                    <div className={Styles.cartContentStyle}>
                      <h4 className={Styles.cartName}>{items.title}</h4>
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
                      <p className="h5">Price</p>
                      <p className={Styles.price}>${items.price}</p>
                    </div>
                    <div className={Styles.removeStyle}>
                      <h5 className={Styles.action}>Action</h5>
                      <button ><i class="fas fa-trash-alt"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            })}</div>
        :<div><h2>No item added to cart yet</h2></div>
}
        </div>
            )
}
