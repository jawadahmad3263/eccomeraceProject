import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeUi from '../UI/HomeUi';
import fetchCategories from '../../../redux/actions/fetchCategories';




export default function Home() {
    const dispatch=useDispatch();
   

    useEffect(()=>{
         dispatch(fetchCategories());
         
    },[])

    const Products= useSelector((state)=>state.categoriesReducer.category);
    
 
    return (
     
        <HomeUi products={Products}/>
     
    )
}
