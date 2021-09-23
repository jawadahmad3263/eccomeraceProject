import React from 'react'
import {Link} from 'react-router-dom'
export default function NavbarUi(props) {
  // const {username} = props;
  // console.log("name",username);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/Products" class="nav-link ">Products</Link>
              </li>
              <li class="nav-item">
               
              {/* <Link class="nav-link" to="/Login">{username}</Link>: */}
                <Link class="nav-link" to="/Login">Login</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>



    )
}
