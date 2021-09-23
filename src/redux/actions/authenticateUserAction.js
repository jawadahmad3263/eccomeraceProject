const loginUser = (credintial) =>{
    return {
        type:'LOGIN_USER',
        payload:credintial,
    }
} 
const logoutUser = () =>{
   return{ type:"LOGOUT_USER",}
}