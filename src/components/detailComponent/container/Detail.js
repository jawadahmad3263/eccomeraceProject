import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import DetailUI from '../UI/DetailUI'
import fetchSingleProduct from '../../../redux/actions/fetchSingleProduct';

function Detail() {
    let {id} =useParams();
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchSingleProduct(id));
    },[])
    const product = useSelector((state) => state.singleProductReducer.singleProduct);
   
    return (
            <DetailUI product={product}/>
    )
}

export default Detail
