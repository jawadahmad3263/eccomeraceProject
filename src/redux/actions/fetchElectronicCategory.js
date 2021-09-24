
const fetchElectronicCategory = () => async (dispatch)=>{
    dispatch({type:"FETCH_ELECTRONIC_CATEGORY_REQ"});
    try{
       const response = await fetch(`https://fakestoreapi.com/products/category/electronics`);
       const category  = await response.json();
       dispatch({type:"FETCH_ELECTRONIC_CATEGORY_SUCCESS",payload:category});
    }
    catch(err){
        dispatch({type:"FETCH_ELECTRONIC_CATEGORY_FAILURE",err})

    }
}
export default fetchElectronicCategory;