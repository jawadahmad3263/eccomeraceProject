import React from "react";
import Slider from "react-slick";
import Styles from "../sliderHero.module.css";

import tshirts from "../assets/tshirts.jpg";
import electronics from "../assets/electronics.jpg";
import jawellary from "../assets/jawellary.jpg";
import shopping from "../assets/shopping.jpg";
import mens from "../assets/mens.PNG";
import summerSale from "../assets/summerSale.PNG";
import shopNow from "../assets/shopNow.PNG";
import Sale from "../assets/Sale.PNG";





function SliderHero() {
  
  let arr=[tshirts,electronics,jawellary,shopping ,Sale, shopNow,summerSale,mens];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1
  };

  const sliderContent=(item,index)=>{
    return(
        <div className={Styles.sliderMain} key={index}>
          <div className={Styles.imagewarapper}>
          <img src={item} alt="tshirts" className={Styles.imgStyle}/>
          <h1 className={Styles.slidContent}>
            Sale Upto 50%
          </h1>
            
          </div>
        
         
        </div>
      )
   
  }
  return (
    <div className="container">
     <h2 className="text-center" style={{color:"rgb(194, 42, 105)",padding:40,fontFamily:"serif",fontSize:40,fontStyle:"italic" }}> Wellcome For Shopping</h2>
        <Slider {...settings}>
            {
              arr.map((item,index)=>{
               return sliderContent(item, index);
              })
            }
          </Slider>
    </div>
  )
}

export default SliderHero;
