import React from 'react'
import Styles from "../assets/css/LoginUi.module.css";
export default function LoginUi(props) {
   const {emailLabel,passwordLabel,handleChange,handleLogin,credintial} = props
    return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-6">
        <form className="py-5">
          <div className="mb-3">
            <label for="email" className={`form-label ${Styles.labelColor}`}>
              {emailLabel}
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder={"Enter Email"}
              value={credintial.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              {passwordLabel}
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder={"Password"}
              value={credintial.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
    )
}
