import React from "react";
import Slider from "react-slick";
import Styles from "../sliderHero.module.css";

import tshirts from "../assets/tshirts.jpg";
import electronics from "../assets/electronics.jpg";
import jawellary from "../assets/jawellary.jpg";
import shopping from "../assets/shopping.jpg";





function SliderHero() {
  
  let arr=[tshirts, electronics, jawellary,shopping];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1
  };
  return (
    <div className="container">
     <h2 className="text-center" style={{color:"rgb(194, 42, 105)",padding:40,fontFamily:"serif",fontStyle:"italic" }}> Wellcome For Shopping</h2>
        <Slider {...settings}>
          {
            arr.map((item)=>{
              return(
                <div style={{height:500,position:"relative"}}>
                  <img src={item} alt="tshirts" style={{width:1100,height:500}}/>
                 
                </div>
              )
            })
          }
          </Slider>
    </div>
  )
}

export default SliderHero;
