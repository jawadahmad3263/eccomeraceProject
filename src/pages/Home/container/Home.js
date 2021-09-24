import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeUi from '../UI/HomeUi';
import fetchJewelaryCategory from '../../../redux/actions/fetchJewelaryCategory';
import fetchMenCategory from '../../../redux/actions/fetchMenCategory';
import fetchWomenCategories from '../../../redux/actions/fetchWomenCategory';

import fetchElectronicCategory from "../../../redux/actions/fetchElectronicCategory";



export default function Home() {
    const dispatch=useDispatch();
   

    useEffect(()=>{
         dispatch(fetchJewelaryCategory());
         dispatch(fetchMenCategory());
         dispatch(fetchWomenCategories());
         dispatch(fetchElectronicCategory());
         
    },[])

    const jewelary= useSelector((state)=>state.jewelaryCategoryReducer.jewelary);
    const menCloths= useSelector((state)=>state.menCategoriesReducer.menClothes);
    const womenCloths= useSelector((state)=>state.womenCategoriesReducer.womenClothes);
    const electronics= useSelector((state)=>state.electronicCategoriesReducer. electronics);
    
 
    return (
     
        <HomeUi jewelary={jewelary} menCloths={menCloths} womenCloths={womenCloths} electronics={electronics}/>
     
    )
}
