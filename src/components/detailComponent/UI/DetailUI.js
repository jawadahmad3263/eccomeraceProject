import React from "react";
import Styles from "../assets/detailUi.module.css";
import { Link } from "react-router-dom";
import Sale from "../../slider/assets/Sale.PNG";
import StarRatings from "react-star-ratings";
function DetailUI(props) {
  var checkItem = 0;
  var addItem = 5;
  const { product } = props;
  return (
    <div className="container">
      <div className={Styles.linkWrapper}>
        <Link to="/">Go back</Link>
      </div>
      <div className={Styles.detailWrapper}>
        <div className={Styles.imgWrapper}>
          <img src={product.image} alt="SaleImages" className="img-fluid" />
        </div>
        <div className={Styles.detailContentWrapper}>
          <h3>Catagory :&nbsp;{product.category}</h3>
          <h4>Title : &nbsp;{product.title}</h4>
          <p className={Styles.para}>
            {" "}
            Price : &nbsp;<span>${product.price}</span>
          </p>
          <p className={Styles.description}>
            <b>Description : &nbsp; </b>
            {product.description}
          </p>
          <div>
          <b>Rating:</b><StarRatings
                rating={product.rating.rate}
                starDimension="30px"
                starSpacing="2.5px"
                starRatedColor="orange"
              />
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default DetailUI;
