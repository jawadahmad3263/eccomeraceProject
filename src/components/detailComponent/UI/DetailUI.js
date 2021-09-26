import React from "react";
import Styles from "../assets/detailUi.module.css";
import { Link } from "react-router-dom";
import Sale from "../../slider/assets/Sale.PNG";
function DetailUI() {
    var checkItem=0;
    var addItem=5;
  return (
    <div className="container">
      <div className={Styles.linkWrapper}>
        <Link to="/">Go back</Link>
      </div>
      <div className={Styles.detailWrapper}>
        <div className={Styles.imgWrapper}>
          <img src={Sale} alt="SaleImages" className="img-fluid" />
        </div>
        <div className={Styles.detailContentWrapper}>
            <h3>Catagory :&nbsp; Electronics</h3>
            <h4>Title : &nbsp; Computer</h4>
            <p className={Styles.para}> Price : &nbsp;<span>$399</span></p>
            <p className={Styles.description}><b>Description : &nbsp; </b>hello wlox sdfjh aadaj asdhjsdb sdjfbsdj sjbsdjhfbj sbjhsdbfjhsd bvjhjcbjhxbjhc bvxjhcbv jhbxcbvxc ds sjdskdjsd nfjknsdjknfjk sndkvxbcvjhbxcj hbvjhxcbvj hbxcjhvbxcjhbvjhx cbvhxbcjhbvxcjh bvjhxbcjhvbx cjhbv</p>


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
