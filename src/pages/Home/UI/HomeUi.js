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
        {/* <h3 className="text-center">Wellcome TO Online Shopping</h3> */}
        <div className="py-5">
          
            <h1 className={`text-center py-2 ${Styles.headings} ` }>Jewellary </h1>
        <div className={`row gy-5 ${Styles.sectionWrapper}`}>

          {props.jewelary?.filter((jewelary,index)=>index<3).map((jewelary,index) => {
            return (
             <Card product={jewelary} index={index}/>
            );
          })}
            <div className={Styles.linkWrapper}>
              <span>click to See more jewelery products</span>
              <Link className={Styles.link} to={`/category/${"jewelary"}`}>Click Here</Link>
              </div>
        </div> 

        <h1 className={`text-center py-2 ${Styles.headings} ` }>Men's Clothes </h1>
        <div className="row gy-5">
          {props.menCloths?.filter((menCloths,index)=>index<3).map((menCloths,index) => {
            return (
             <Card product={menCloths} index={index}/>
            );
          })}
          <div className={`conatiner ${Styles.linkWrapper}`}>
              <span>Click to See   Men's Clothes  </span>
              <Link className={Styles.link} to={`/category/${"menCloths"}`}>Click Here</Link>
              </div>
        </div> 
        <h1 className={`text-center py-2 ${Styles.headings} ` }>WomenCothes </h1>
        <div className="row gy-5">
          {props.womenCloths?.filter((womenCloths,index)=>index<3).map((womenCloths,index) => {
            return (
             <Card product={womenCloths} index={index}/>
            );
          })}
          <div className={`conatiner ${Styles.linkWrapper}`}>
              <span>Click to see  more WomenClothes</span>
              <Link className={Styles.link} to={`/category/${"womenCloths"}`} >Click Here</Link>
              </div>
        </div> 
        <div className="row gy-5">
          {props.electronics?.filter((electronics,index)=>index<3).map((electronics,index) => {
            return (
             <Card product={electronics} index={index}/>
            );
          })}
          <div className={`conatiner ${Styles.linkWrapper}`}>
              <span>Click To see Electronic products </span>
              <Link className={Styles.link} to={`/category/${"electronics"}`}>Click Here</Link>
              </div>
        </div> 
        </div>
        </div>
      );
}
