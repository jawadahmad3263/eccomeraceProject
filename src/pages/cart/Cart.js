import React from 'react'
import ShoppingCart from '../../components/shoppingcart/ShoppingCart'
import TotalPrice from '../../components/totalprice/TotalPrice'
import Styles from "./Cart.module.css";

function Cart() {
    return (
        <div className={ ` container ${Styles.mainCartWrapper}`}>
            <ShoppingCart/>
            <TotalPrice/>
        </div>
    )
}

export default Cart
