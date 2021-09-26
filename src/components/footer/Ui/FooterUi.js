import React from "react";
import Styles from "../assets/css/FooterUi.module.css";
import { Link } from "react-router-dom";
export default function FooterUi() {
  return (
    <footer className={`text-center text-lg-start bg-light ${Styles.mainWrapper}`} style={{color:"rgb(194, 42, 105)", marginTop:50}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className={Styles.spanStyle}>Get connected with us on social networks:</span>
        </div>

        <div className={Styles.footerStyle} style={{color:"rgb(194, 42, 105)"}} >
          <Link to="/www.facebook.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="www.twitter.com" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/google.com" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </Link>
          <Link to="/instagram.com" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/linkedIn.com" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="/github.com" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Iplex Business and Development
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="/" className="text-reset">
                  Jewellary
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Electronics
                </Link>
              </p>
              <p>
                <Link  to="/" className="text-reset">
                  Wommen Clothes
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Men's Cloths
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className={`text-uppercase fw-bold mb-4 ${Styles.footerStyle}`}>Useful links</h6>
            
              <p>
                <Link to="/" className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Help
              </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Iplex, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
      >
        © 2021 Copyright:
        <p className="text-reset fw-bold">
          DEVELOP BY: JAWAD & HAMID ALI
        </p>
      </div>
    </footer>
  );
}
