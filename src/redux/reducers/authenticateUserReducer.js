import { initialState } from "../store/initialState";
const authenticateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      var tempUsers = [...state.registerdUsers];

      for (var i = 0; i < tempUsers.length; i++) {
        if (tempUsers[i].email === action.payload.email)
          tempUsers[i].loginStatus = true;
      }
      return {
        ...state,
        registerdUsers: [...tempUsers],
      };
    case "LOGOUT_USER":
      var users = [...state.registerdUsers];

      for (var i = 0; i < users.length; i++) {
        if (users[i].email === action.payload.email)
          users[i].loginStatus = false;
      }
      return {
        ...state,
        registerdUsers: [...users],
      }

    default:
      return state;
  }
};
export default authenticateUserReducer;
