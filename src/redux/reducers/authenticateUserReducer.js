import { initialState } from "../store/initialState";
const authenticateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
        var tempUsers=[...state.registerdUsers]
           
            for(var i=0;i<tempUsers.length;i++)
            {
                if(tempUsers[i].email===action.payload.email)
                   tempUsers[i].loginStatus=true;
                  
            }
           return{
           ...state,
           registerdUsers:[...tempUsers]
            }
    // case "LOGOUT_USER":
    //   return {
    //     ...state,
      
    //   }
  
    default:
        return state
    }
  
};
export default authenticateUserReducer;