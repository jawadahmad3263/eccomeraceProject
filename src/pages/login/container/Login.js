import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "../../../redux/actions/authenticateUserAction";
import LoginUi from "../UI/LoginUi";

export default function Login() {
  const [emailLabel, setEmailLabel] = useState("Email*");
  const [passwordLabel, setPasswordLabel] = useState("Password*");
  const [credintial, setCredintial] = useState({
    email: "",
    password: "",
  });
  const [logStatus,setLogStatus] = useState(false);
  const [logUser,setLogUser] = useState({});
  const dispatch = useDispatch();
  // getting registered users data from store
  const registerdUsers = useSelector(
    (state) => state.authenticateUserReducer.registerdUsers
  );
  // console.log("users", registerdUsers);
  // const loginUser = registerdUsers.filter((user)=>user.loginStatus===true)
  // console.log("checkStatus",loginUser)
  //function to set credintial
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredintial({
      ...credintial,
      [name]: value,
    });
  };
  //function to login user
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("credintial", credintial);
    const user = registerdUsers.find((user)=>(user.email===credintial.email&&user.password===credintial.password));
    const passCheck = registerdUsers.find((user)=>(user.email===credintial.email&&user.password!==credintial.password));
    console.log("kiki",user)
    
    if(user){
      dispatch(action.loginUser(credintial));
      setLogStatus(user.loginStatus)
      setLogUser(user);
    }
    else if(passCheck)
    {
      setPasswordLabel("incorrect password")
    }
    else{
      setEmailLabel("incorrect email")
      setPasswordLabel("incorrect password")
    }

  };
  //function to logout user
  const handleLogout = (logUser) =>{
    dispatch(action.logoutUser(logUser));
    setLogStatus(false);
  }

  return (
    <LoginUi
      emailLabel={emailLabel}
      passwordLabel={passwordLabel}
      handleChange={handleChange}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      credintial={credintial}
      logStatus={logStatus}
      logUser={logUser}
    />
  );
}
