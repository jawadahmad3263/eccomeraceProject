import React from 'react';
import SliderHero from '../../../components/slider/sliderUi/SliderHero';
import {Link} from "react-router-dom";
import Styles from "../assets/css/HomeUi.module.css";
import Card from '../../../components/card/container/Card';

export default function HomeUi(props) {
  const {jewelary,menCloths,womenCloths,electronics} = props;
    return (
        <div className={`container ${Styles.homepage}`}>
        <div><SliderHero/></div>
        <div className="py-5">
          <h3 className="text-center">Wellcome TO Online Shopping</h3>
        <Link className="btn btn-primary ">Jewallary</Link>
        <div className="row gy-5">
          {props.jewelary?.filter((jewelary,index)=>index<3).map((jewelary,index) => {
            return (
             <Card product={jewelary} index={index}/>
            );
          })}
        </div> 
        <Link className="btn btn-primary">Men's Cloths</Link>
        <div className="row gy-5">
          {props.menCloths?.filter((menCloths,index)=>index<3).map((menCloths,index) => {
            return (
             <Card product={menCloths} index={index}/>
            );
          })}
        </div> 
        <Link className="btn btn-primary">Women's Cloths</Link>
        <div className="row gy-5">
          {props.womenCloths?.filter((womenCloths,index)=>index<3).map((womenCloths,index) => {
            return (
             <Card product={womenCloths} index={index}/>
            );
          })}
        </div> 
        <Link className="btn btn-primary">Electronics</Link>
        <div className="row gy-5">
          {props.electronics?.filter((electronics,index)=>index<3).map((electronics,index) => {
            return (
             <Card product={electronics} index={index}/>
            );
          })}
        </div> 
        </div>
        </div>
      );
}
