import React from 'react';
import Styles from "../assets/css/HomeUi.module.css";

export default function HomeUi(props) {
    // const {allProducts} = props.allProducts;
    
    return (
        <div className={`container ${Styles.homepage}`}>
          <h3>Wellcome TO Online Shopping</h3>
        <div className="row gy-5">
          {props.products?.map((product,index) => {
            return (
              <div className="col-md-4 col-lg-4" key={index}>
              <div className={`card  p-2 shadow ${Styles.cardStyel}`}>
                <img src={product.image} className={`card-img-top ${Styles.sizeofimage}`} alt="..." />
                <div className="card-body">
                  <div className={Styles.cardBodyStyle}>
                 <div className="titlestyle"> <h5 className="card-title">{product.title}</h5> 
                  <p className="card-text"> <b>Price:</b> &nbsp;<span className="text-danger">{product.price}$</span></p>
                  <button className="btn btn-primary"> Add to Cart</button>
                </div>
                </div>
                </div> 
              </div>
              </div>
            );
          })}
        </div> 
        </div>
      );
}
