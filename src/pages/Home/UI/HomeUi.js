import React from 'react';
import SliderHero from '../../../components/slider/sliderUi/SliderHero';
import {Link} from "react-router-dom";
import Styles from "../assets/css/HomeUi.module.css";

export default function HomeUi(props) {
    // const {allProducts} = props.allProducts;
    
    return (
        <div className={`container ${Styles.homepage}`}>
        <div><SliderHero/></div>
        <div className="py-5">
          <h3 className="text-center">Wellcome TO Online Shopping</h3>
          <Link className="btn btn-primary">Jewallary</Link>
        <div className="row gy-5">
          {props.products?.map((product,index) => {
            return (
              <div className="col-md-4 col-lg-4" key={index}>
              <div className={`card  p-2 shadow ${Styles.cardStyle}`}>
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
        </div>
      );
}
