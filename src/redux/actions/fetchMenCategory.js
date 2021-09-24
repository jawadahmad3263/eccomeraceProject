
const fetchMenCategory = () => async (dispatch)=>{
    dispatch({type:"FETCH_MEN_CATEGORY_REQ"});
    try{
       const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
       const category  = await response.json();
       dispatch({type:"FETCH_MEN_CATEGORY_SUCCESS",payload:category});
    }
    catch(err){
        dispatch({type:"FETCH_MEN_CATEGORY_FAILURE",err})

    }
   

}
export default fetchMenCategory;