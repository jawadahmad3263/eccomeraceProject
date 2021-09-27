const loginUser = (credintial) => {
  console.log("i am in user login action");
  return {
    type: "LOGIN_USER",
    payload: credintial,
  };
};
const logoutUser = (user) => {
  return { type: "LOGOUT_USER",
  payload: user,
};

};
const getStatus = () =>{
  return {
    type:"USER_STATUS"
  }};
export default {
  loginUser,
  logoutUser,
  getStatus
};
