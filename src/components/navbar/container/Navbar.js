import React,{useState,useEffect} from 'react'
import NavbarUi from '../UI/NavbarUi'
import { useSelector, useDispatch } from "react-redux";
import authenticateUserReducer  from '../../../redux/reducers/authenticateUserReducer';

export default function Navbar() {
    const addedItems= useSelector((state)=>state.cartReducer.cartData);
    // const [username,setUsername] = useState("");
    // const registerdUsers = useSelector(
    //     (state) => state.authenticateUserReducer.registerdUsers
    //   );
    // useEffect(()=>{
      
    //     const user = registerdUsers.filter((user) =>user.loginStatus===true);
    //     console.log(user)
    //     if(user){
    //     setUsername(user.name);
    //     } 
    // },[])
    
    return (
        <NavbarUi counter={addedItems.length}/>
    )
}
