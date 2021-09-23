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
    const userCheck = registerdUsers.find((user)=>(user.email===credintial.email&&user.password===credintial.password));
    const passCheck = registerdUsers.find((user)=>(user.email===credintial.email&&user.password!==credintial.password));
    const emailCheck = registerdUsers.find((user)=>user.email!==credintial.email);
    if(userCheck===true){
      dispatch(action.loginUser(credintial));
    }
    if(emailCheck===true)
    {
      setEmailLabel("incorrect email")
    }
    if(passCheck===true)
    {
      setPasswordLabel("incorrect password")
    }


    // for (var i = 0; i < registerdUsers.length; i++) {
    //   if (registerdUsers[i].email === credintial.email) 
    //   {
    //     if(registerdUsers[i].password === credintial.password){
    //    return dispatch(action.loginUser(credintial));
    //     break;}
    //     else{
    //      return setPasswordLabel("incorrect password");
    //     }
    //   } 
    //   if(registerdUsers[i].email!== credintial.email)
    //       setEmailLabel("incorrect Email")
 
    // }
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
