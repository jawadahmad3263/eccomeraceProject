import React,{useState} from 'react'
import LoginUi from '../UI/LoginUi'

export default function Login() {
  const [emailLabel,setEmailLabel] = useState("Email*");
  const [passwordLabel,setPasswordLabel] = useState("Password*");
  const [credintial, setCredintial] = useState({
    email: "",
    password: "",
  });
 
    //function to set credintial
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredintial({
        ...credintial,
        [name]: value,
      });
    };
    //function to login user
    const handleLogin = () =>{

    }
    return (
      <LoginUi emailLabel={emailLabel} passwordLabel={passwordLabel}
       handleChange={handleChange} handleLogin={handleLogin}
        credintial={credintial}/>
    )
}
