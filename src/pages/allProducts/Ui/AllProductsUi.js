import React from 'react';
import Card from '../../../components/card/container/Card';
import Styles from "../assets/css/AllProductsUi.module.css";
export default function AllProductsUi(props) {
    // const {allProducts} = props.allProducts;
    
    return (
        <div className={`container ${Styles.homepage}`}>
     
          <h3>All Products</h3>
          
        <div className="row gy-5">
          {props.products?.map((product,index) => {
            return (
              <Card product={product} index={index}/>
            );
          })}
        </div> 
        </div>
      );
}
