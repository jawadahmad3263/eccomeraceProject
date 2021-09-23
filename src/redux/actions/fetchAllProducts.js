
const fetchAllProducts = () => async (dispatch)=>{
    dispatch({type:"FETCH_PRODUCTS_REQ"});
    try{
       const response = await fetch(`https://fakestoreapi.com/products`);
       const allProducts  = await response.json();
       dispatch({type:"FETCH_PRODUCTS_SUCCESS",payload:allProducts});
    }
    catch(err){
        dispatch({type:"FETCH_PRODUCTS_FAILURE",err})

    }
   

}

export default fetchAllProducts;