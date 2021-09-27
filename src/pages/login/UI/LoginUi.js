import React from 'react'
import Styles from "../assets/css/LoginUi.module.css";
export default function LoginUi(props) {
   const {emailLabel,passwordLabel,handleChange,handleLogin,handleLogout,credintial,logStatus,logUser} = props
    return (
      <div>{logStatus===true?
        //logout 
        <div className={`text-center ${Styles.logoutStyle}`}>
          <h4 className={Styles.logoutheads}>{logUser.name}</h4>
        <h4 className="py-4">{logUser.email}</h4>
        <button onClick={handleLogout}>Logout</button>
        </div>:
        //login
        <div className={`${Styles.formContainer}`}>
        <div className="row ">
          <h3 className={`text-center text-uppercase fw-bold ${Styles.heading} `}>Login Here</h3>
           <div className="col-md-3"></div>
          <div className="col-md-6 col-lg-6 ">
            <form className={`py-5 ${Styles.formStyle}`}>
              <div className="mb-3 py-3">
                <label for="email" className="form-label h4">
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
              <div className="mb-3 py-2">
                <label for="password" className="form-label h4">
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
                className="btn btn-primary h3"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
          <div className="col-md-3"> </div>
         
        </div>
      </div>
        }</div>
   
    )
}
