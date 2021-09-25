import React,{useState} from 'react'
import CardUi from '../UI/CardUi'
import { useDispatch,useSelector } from "react-redux";
import cartAction from '../../../redux/actions/cartAction'
export default function Card(props) {
    var checkItem=false
    const dispatch = useDispatch();
    const {product,index} = props;
    //fun to add selected items to cart
    const addItem = () => {
        dispatch(cartAction.Add(product));
    }
    const addedItems= useSelector((state)=>state.cartReducer.cartData);
    //check if item is added to cart before
    checkItem=addedItems.includes(product);

    return (
        <CardUi product={product} index={index} addItem={addItem} checkItem={checkItem} />
    )
}
