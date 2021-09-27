import React, { useEffect } from 'react';
import fetchCategory from '../../../redux/actions/fetchCategory';
import { useParams } from 'react-router'
import CategoryUi from '../Ui/CategoryUi'
import { useDispatch, useSelector } from 'react-redux'
export default function Category() {
    let {categoryType}=useParams();
    const dispatch = useDispatch()
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
    var category=[];
    switch(categoryType){
        case 'jewelary':{
           category = jewelary
           break;
        }
        case 'menCloths':{
           category = menCloths
        break;
        }
        case 'womenCloths':{
           category = womenCloths
        break;
        }
        case 'electronics':{
            category = electronics
            break;
        }
        default:
            return []   
         
    }
   
    console.log(category)
    return (
        <CategoryUi category={category} />
    )
}
