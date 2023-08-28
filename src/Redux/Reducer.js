

import { MAKE_REQUEST,FAIL_REQUEST,GET_USER_LIST,DELETE_USER, ADD_USER } from "./ActionType";
const initialstate = {
    loading:false,
    userList: [],
    userObj: {},
    errMessage:''
}
export const Reducer = (state=initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errMessage:action.payload

      };
      case GET_USER_LIST:
      return {
        errMessage:'',
        loading: false,
        userList:action.payload,
        userObj:{}
      };
      case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
      case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
