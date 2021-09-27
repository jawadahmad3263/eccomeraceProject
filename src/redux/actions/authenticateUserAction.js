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
export default {
  loginUser,
  logoutUser,
};
