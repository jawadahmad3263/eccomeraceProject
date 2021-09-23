import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeUi from '../UI/HomeUi'
import fetchAllProducts from '../../../redux/actions/fetchAllProducts';



export default function Home() {
    const dispatch=useDispatch();
   

    useEffect(()=>{
         dispatch(fetchAllProducts());
         
    })

    const Products= useSelector((state)=>state.allProductsReducer.allProducts);
    console.log('prod',Products);
 
    return (
        <HomeUi products={Products}/>
    )
}
