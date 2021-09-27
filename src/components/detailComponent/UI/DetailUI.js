import React from "react";
import Styles from "../assets/detailUi.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../Loader";
function DetailUI(props) {
  const { addItem, checkItem } = props;
  const loading = useSelector((state) => state.singleProductReducer.loading);
  const product = useSelector(
    (state) => state.singleProductReducer.singleProduct
  );
  return (
    <div>
      {loading === true ? (
        <div className={Styles.spinner}>
          <Loader />
        </div>
      ) : (
        <div>
          <div className="container">
            <div className={Styles.linkWrapper}>
              <Link to="/">Go back</Link>
            </div>
            <div className={Styles.detailWrapper}>
              <div className={Styles.imgWrapper}>
                <img
                  src={product.image}
                  alt="SaleImages"
                  className="img-fluid"
                />
              </div>
              <div className={Styles.detailContentWrapper}>
                <h3>Catagory :&nbsp;{product.category}</h3>
                <h4>Title : &nbsp;{product.title}</h4>
                <p className={Styles.para}>
                  Price : &nbsp;<span>${product.price}</span>
                </p>
                <p className={Styles.description}>
                  <b>Description : &nbsp; </b>
                  {product.description}
                </p>
                {/* <p>Rating:<b>{product.rating.rate}</b></p> */}
                <div>
                  {checkItem === false ? (
                    <button className="btn btn-primary" onClick={addItem}>
                      Add to Cart
                    </button>
                  ) : (
                    <button className="btn btn-primary" disabled>
                      item Added
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailUI;
