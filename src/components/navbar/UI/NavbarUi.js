// import React from 'react'
// import {Link} from 'react-router-dom'
// export default function NavbarUi(props) {
//   // const {username} = props;
//   // console.log("name",username);
//     return (
//         <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
//         <div class="container">
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link to="/" class="nav-link active" aria-current="page">Home</Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/Products" class="nav-link ">Products</Link>
//               </li>
//               <li class="nav-item">
               
//               {/* <Link class="nav-link" to="/Login">{username}</Link>: */}
//                 <Link class="nav-link" to="/Login">Login</Link>
//               </li>
//             </ul>
import React from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/NavbarUi.module.css";
import logo from "../assets/icons/second-log.PNG";

export default function NavbarUi() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light py-3 ${Styles.header}`}
    >
      <div className={`container ${Styles.containerStyle}`}>
        <Link className={`navbar-brand ${Styles.logo_style}`} to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${Styles.list}`}>
            <li className={`nav-item ${Styles.liststyle} `}>
              <Link
                to="/"
                className={`nav-link ${Styles.linkstyle} `}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className={`nav-item  ${Styles.liststyle}`}>
              <Link to="/Products" className={`nav-link ${Styles.linkstyle} `}>
                Products
              </Link>
            </li>
            <li className={`nav-item  ${Styles.liststylelast}`}>
              <Link className={`nav-link ${Styles.linkstyle} `} to="/Login">
                Login
              </Link>
            </li>
            <li className={`nav-item ${Styles.liststyle}`}>
              <Link className={`nav-link ${Styles.linkstyle} `}>
                <i className={`fas fa-cart-plus ${Styles.cart} `}>
                  {" "}
                  <span className={Styles.cartCounter}>12</span>
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
