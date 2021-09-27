import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import DetailUI from '../UI/DetailUI'
import fetchSingleProduct from '../../../redux/actions/fetchSingleProduct';
import cartAction from '../../../redux/actions/cartAction';
function Detail() {
    let {id} =useParams();
    var checkItem = false;
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchSingleProduct(id));
    },[])
    const product = useSelector((state) => state.singleProductReducer.singleProduct);
    //fun to item to cart
    const addItem = () => {
        product["quantity"]=1
        dispatch(cartAction.Add(product));
    }
    const addedItems= useSelector((state)=>state.cartReducer.cartData);
    addedItems?.find((item, index) => {
        if (item.id === product.id) {
          checkItem = true;
        }
      });

    return (
            <DetailUI addItem={addItem} checkItem={checkItem}/>
    )
}

export default Detail;
