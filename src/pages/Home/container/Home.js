import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeUi from '../UI/HomeUi';
import fetchCategory from '../../../redux/actions/fetchCategory';
// import fetchMenCategory from '../../../redux/actions/fetchMenCategory';
// import fetchWomenCategories from '../../../redux/actions/fetchWomenCategory';

// import fetchElectronicCategory from "../../../redux/actions/fetchElectronicCategory";



export default function Home() {
    const dispatch=useDispatch();
   

    useEffect(()=>{
         dispatch(fetchCategory("jewelery"));
         dispatch(fetchCategory("men's clothing"));
         dispatch(fetchCategory("women's clothing"));
         dispatch(fetchCategory("electronics"));
         
    },[])

    const jewelary= useSelector((state)=>state.categoryReducer.jewelary);
    const menCloths= useSelector((state)=>state.categoryReducer.menClothes);
    const womenCloths= useSelector((state)=>state.categoryReducer.womenClothes);
    const electronics= useSelector((state)=>state.categoryReducer.electronics);
    
 
    return (
     
        <HomeUi jewelary={jewelary} menCloths={menCloths} womenCloths={womenCloths} electronics={electronics}/>
     
    )
}
