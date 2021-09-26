const fetchSingleProduct = (id) => async (dispatch) => {
    dispatch({ type: `FETCH_SINGLE_PRODUCT_REQ` });
  
    try{
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const product = await response.json();
      dispatch({ type: `FETCH_SINGLE_PRODUCT_SUCCESS`, payload: product });
      }
     catch (err)
      {
      dispatch({ type: `FETCH_SINGLE_PRODUCT_FAILURE`, err });
      }
  };
  export default fetchSingleProduct;
  