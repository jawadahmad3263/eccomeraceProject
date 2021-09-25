const fetchCategory = (categoryName) => async (dispatch) => {
  const cat_Name = categoryName.toUpperCase();
  dispatch({ type: `FETCH_${cat_Name}_CATEGORY_REQ` });

  try{
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    const category = await response.json();
    dispatch({ type: `FETCH_${cat_Name}_CATEGORY_SUCCESS`, payload: category });
    }
   catch (err)
    {
    dispatch({ type: `FETCH_${cat_Name}_CATEGORY_FAILURE`, err });
    }
};
export default fetchCategory;
