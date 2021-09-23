const loginUser = (credintial) =>{
    console.log("i am in user login action")
    return {
        type:'LOGIN_USER',
        payload:credintial,
    }
} 
const logoutUser = () =>{
   return{ type:"LOGOUT_USER",}
}
export default{
    loginUser,
    logoutUser
}