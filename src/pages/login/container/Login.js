import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import action from '../../../redux/actions/authenticateUserAction';
import authenticateUserReducer from '../../../redux/reducers/authenticateUserReducer';
import LoginUi from '../UI/LoginUi'

export default function Login() {
  const [emailLabel,setEmailLabel] = useState("Email*");
  const [passwordLabel,setPasswordLabel] = useState("Password*");
  const [credintial, setCredintial] = useState({
    email: "",
    password: "",
  });
 const dispatch = useDispatch();
   // getting registered users data from store
   const registerdUsers = useSelector((state) => state.authenticateUserReducer.registerdUsers);
   console.log("users",registerdUsers)
    //function to set credintial
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredintial({
        ...credintial,
        [name]: value,
      });
    };
    //function to login user
    const handleLogin = (event) =>{
      event.preventDefault();
    console.log("credintial",credintial)
    for( var i=0;i<registerdUsers.length;i++){
      if(registerdUsers[i].email===credintial.email && registerdUsers[i].password===credintial.password){
          dispatch(action.loginUser(credintial))
              
          
      }
      else if(registerdUsers[i].email===credintial.email&&registerdUsers[i].password!==credintial.password){
        
        setPasswordLabel("incorrect password")
      }
      else if(registerdUsers[i].email!==credintial.email&&registerdUsers[i].password===credintial.password){
          
          setEmailLabel("incorrect Email")
      }
      else{
        setEmailLabel("incorrect Email");
        setPasswordLabel("incorrect Password")
      }
}

}
    
    
    return (
      <LoginUi emailLabel={emailLabel} passwordLabel={passwordLabel}
       handleChange={handleChange} handleLogin={handleLogin}
        credintial={credintial}/>
    )
}
