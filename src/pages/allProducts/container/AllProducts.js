import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllProductsUi from '../Ui/AllProductsUi'


import fetchAllProducts from '../../../redux/actions/fetchAllProducts';




export default function AllProducts() {
    const dispatch=useDispatch();
   

    useEffect(()=>{
         dispatch(fetchAllProducts());
         
    })

    const Products= useSelector((state)=>state.allProductsReducer.allProducts);
    console.log('prod',Products);
 
    return (
     
        <AllProductsUi  products={Products}/>
     
    )
}
