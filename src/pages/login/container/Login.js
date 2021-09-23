import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import action from "../../../redux/actions/authenticateUserAction";
import authenticateUserReducer from "../../../redux/reducers/authenticateUserReducer";
import LoginUi from "../UI/LoginUi";

export default function Login() {
  const [emailLabel, setEmailLabel] = useState("Email*");
  const [passwordLabel, setPasswordLabel] = useState("Password*");
  const [credintial, setCredintial] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  // getting registered users data from store
  const registerdUsers = useSelector(
    (state) => state.authenticateUserReducer.registerdUsers
  );
  console.log("users", registerdUsers);
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
    const emailCheck = registerdUsers.find((user)=>user.email!==credintial.email);
    console.log("kiki",user)
    if(user){
      dispatch(action.loginUser(credintial));
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

  return (
    <LoginUi
      emailLabel={emailLabel}
      passwordLabel={passwordLabel}
      handleChange={handleChange}
      handleLogin={handleLogin}
      credintial={credintial}
    />
  );
}
