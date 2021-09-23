
const fetchCategories = () => async (dispatch)=>{
    dispatch({type:"FETCH_CATEGORY_REQ"});
    try{
       const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
       const category  = await response.json();
       dispatch({type:"FETCH_CATEGORY_SUCCESS",payload:category});
    }
    catch(err){
        dispatch({type:"FETCH_CATEGORY_FAILURE",err})

    }
   

}
export default fetchCategories;