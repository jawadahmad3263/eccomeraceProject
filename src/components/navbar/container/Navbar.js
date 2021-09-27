import React from 'react'
import NavbarUi from '../UI/NavbarUi'
import { useSelector } from "react-redux";


export default function Navbar() {
    const addedItems= useSelector((state)=>state.cartReducer.cartData);
  
    return (
        <NavbarUi counter={addedItems.length}/>
    )
}
