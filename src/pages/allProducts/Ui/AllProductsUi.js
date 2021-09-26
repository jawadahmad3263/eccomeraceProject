import React from "react";
import Card from "../../../components/card/container/Card";
import Loader from "../../../components/Loader";
import Styles from "../assets/css/AllProductsUi.module.css";
import { useDispatch, useSelector } from "react-redux";
export default function AllProductsUi(props) {
  const loading = useSelector((state) => state.allProductsReducer.loading);
  const products = useSelector((state) => state.allProductsReducer.allProducts);
  return (
    <div className={`container ${Styles.homepage}`}>
      <div className={Styles.allProductStyle}>
      <h3>Available Products</h3>
      </div>
   
      <div>
        {loading === true ? (
          <div className={Styles.spinner}>
            <Loader />
          </div>
        ) : (
          <div className="row gy-5">
            {products?.map((product, index) => {
              return <Card product={product} index={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
