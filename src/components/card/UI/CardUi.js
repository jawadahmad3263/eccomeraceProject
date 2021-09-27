import React from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/CardUi.module.css";
import StarRatings from "react-star-ratings";
export default function CardUi(props) {
  const { product, index, addItem, checkItem } = props;
  return (
    <div className="col-md-4 col-lg-4"   key={index}>
      <div className={`card  p-2 ${Styles.cardStyle}`}>
        <img
          src={product.image}
          className={`card-img-top image-fluid ${Styles.sizeofimage}`}
        
          alt="..."
        />
        <div className="card-body">
          <div className={Styles.cardBodyStyle}>
            <div className="titlestyle">
              <h5 className={`card-title ${Styles.titleStyle}`}>
                {product.title}
              </h5>
              <p className={`card-text ${Styles.priceStyle}`}>
                <b>Price:</b> &nbsp;
                <span className="text-danger">${product.price}</span>
              </p>
              <div className={Styles.buttonMainWrapper}>
                <div>
                  {checkItem === false ? (
                    <button className={`btn btn-outline-primary ${Styles.btnStyle}`} onClick={addItem}>
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={addItem}
                      disabled
                    >
                      Item added
                    </button>
                  )}
                </div>
                <div>
                  <Link className={Styles.showDetailStyle} to={`/detail/${product.id}`}>
                    Show Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className={Styles.ratingWrapper}>
              <StarRatings
                rating={product.rating.rate}
                starDimension="25px"
                starSpacing="2px"
                starRatedColor="orange"
              />
              <h5>Reviews ({product.rating.rate})</h5>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
