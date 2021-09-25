import React from 'react';
import Styles from '../assets/css/CategoryUi.module.css';
import Card from '../../card/container/Card';
import {Link} from "react-router-dom";
export default function CategoryUi(props) {
    const {category} = props;
    console.log("category=",category);
    return (
        <div className={Styles.detailWrapper}>
            <Link className={Styles.backlinkStyle} to="/">Back To Home</Link>
            <p></p>
            <p></p>
           
             <div className={`container${Styles.detailStyle} `}>
          
          <div className="row gy-4">
          {category?.map((item,index) => {
            return (
             <Card product={item} index={index}/>
            );
          })}
          </div>
        </div>
        </div>
       
    )
}
