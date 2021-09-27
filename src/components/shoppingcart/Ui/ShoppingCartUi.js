import React from 'react'
import Styles from "../assets/css/ShoppingCartUi.module.css";
import { Link } from 'react-router-dom';
import cartImg from "../assets/icons/cartImg.jpg";
export default function ShoppingCartUi(props) {
    const { addedItems,deleteItem,quantity,quantityPlus,quantityMinus} = props;
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
                      <p className={Styles.cartName}>{items.title}</p>
                    </div>
                    
                     <div>
                       <div className={Styles.quanty}><h5>Quantity</h5></div>
                     <div className={Styles.actionsStyle}>
                   
                   <button onClick={()=>quantityPlus(items.id)}><i class="fas fa-plus"></i></button>
                   <p className={Styles.cartQuantity}>{items.quantity}</p>
                   {items.quantity!==1?
                  <button onClick={()=>quantityMinus(items.id)}><i class="fas fa-minus"></i></button>:
                  <button disabled><i class="fas fa-minus"></i></button>
                }
                 </div>
                     </div>
                   
                    <div className={Styles.cartContentStyle}>
                      <p className={`h5 ${Styles.para}`}>Price</p>
                      <p className={Styles.price}>${items.price}</p>
                    </div>
                    <div className={Styles.removeStyle}>
                      <h5 className={Styles.action}>Action</h5>
                      <button type="primary" onClick={()=>deleteItem(items.id)}><i class="fas fa-trash-alt"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            })}</div>
        :<div className={Styles.emptyCartStyle}>
          <img src={cartImg} alt="empty cart"/>
          <h2>Your Cart is empty </h2>
          <p>Add something to Make me Happy:) </p>
          <Link className="btn btn-primary" to="/"> Continoue Shopping</Link>
          
          </div>
}
        </div>
            )
}
