import React from 'react';
import SliderHero from '../../../components/slider/sliderUi/SliderHero';
import {Link} from "react-router-dom";
import Styles from "../assets/css/HomeUi.module.css";
import Card from '../../../components/card/container/Card';

export default function HomeUi(props) {
    // const {allProducts} = props.allProducts;
    
    return (
        <div className={`container ${Styles.homepage}`}>
        <div><SliderHero/></div>
        <div className="py-5">
          <h3>Wellcome TO Online Shopping</h3>
          <Link className="btn btn-primary">Jewallary</Link>
        <div className="row gy-5">
          {props.products?.filter((product,index)=>index<3).map((product,index) => {
            return (
             <Card product={product} index={index}/>
            );
          })}
        </div> 
        </div>
        </div>
      );
}
