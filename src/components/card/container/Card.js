import React,{useState} from 'react'
import CardUi from '../UI/CardUi'
import { useDispatch,useSelector } from "react-redux";
import cartAction from '../../../redux/actions/cartAction'
export default function Card(props) {
     
    const dispatch = useDispatch();
    const {product,index} = props;
    //fun to add selected items to cart
    const addItem = () => {
        product["quantity"]=1
        dispatch(cartAction.Add(product));
    }
    const addedItems= useSelector((state)=>state.cartReducer.cartData);
    const products = useSelector((state) => state.allProductsReducer.allProducts);
   //check if item is added to cart before
   const check=()=>{
    return addedItems.includes(product);
}
var checkItem=check();

    return (
        <CardUi product={product} index={index} addItem={addItem} checkItem={checkItem} />
    )
}
