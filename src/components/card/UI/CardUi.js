import React from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/CardUi.module.css";
export default function CardUi(props) {
  const { product, index, addItem, checkItem } = props;
  return (
    <div className="col-md-4 col-lg-4" key={index}>
      <div className={`card  p-2 shadow ${Styles.cardStyle}`}>
        <img
          src={product.image}
          className={`card-img-top image-fluid ${Styles.sizeofimage}`}
          alt="..."
        />
        <div className="card-body">
          <div className={Styles.cardBodyStyle}>
            <div className="titlestyle">
          
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
              
                <b>Price:</b> &nbsp;
                <span className="text-danger">{product.price}$</span>
              </p>
              <div className={Styles.buttonMainWrapper}>
                <div>
                {checkItem === false ? (
                <button className="btn btn-primary" onClick={addItem}>
                  
                  Add to Cart
                </button>
              ) : (
                <button className="btn btn-primary" onClick={addItem} disabled>

                  Item added
                </button>
              )}
              
                </div>
                <div>
                <Link className={`btn btn-info ${Styles.showDetailStyle}`} to="/detail">Show Detail</Link>
              </div>
              </div>
             
              
            </div>
            <div className={Styles.ratingWrapper}>
              <div>
                <h6>User Reviews</h6>
              </div>
              <div className={Styles.starStyling}>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
