import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../config/constants";
const defaultState = {
  isLoggedIn: false,
  username: "",
  password: ""
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        people: [],
        isLoggedIn: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        people: action.data
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: true
      };
    case "LOGIN":
      return Object.assign({}, state, {
        isLoggedIn: true,
        username: action.username,
        password: action.password
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: "",
        password: ""
      });
    default:
      return state;
  }
}
