import React from 'react'
import ShoppingCartUi from '../Ui/ShoppingCartUi'
import { useDispatch, useSelector } from 'react-redux'
export default function ShoppingCart() {

    const addedItems= useSelector((state)=>state.cartReducer.cartData);
    return (
      <ShoppingCartUi addedItems={addedItems}/>
    )
}
