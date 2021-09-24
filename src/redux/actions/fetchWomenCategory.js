
const fetchWomenCategories = () => async (dispatch)=>{
    dispatch({type:"FETCH_WOMEN_CATEGORY_REQ"});
    try{
       const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
       const category  = await response.json();
       dispatch({type:"FETCH_WOMEN_CATEGORY_SUCCESS",payload:category});
    }
    catch(err){
        dispatch({type:"FETCH_WOMEN_CATEGORY_FAILURE",err})

    }
   

}
export default fetchWomenCategories;