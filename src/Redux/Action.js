import axios from "axios";
import { FAIL_REQUEST, MAKE_REQUEST ,GET_USER_LIST,DELETE_USER,ADD_USER} from "./ActionType";
import {store} from './Store';
export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const fetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        const userList = response.data;
        dispatch(getUserList(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};

export const removeUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .delete("http://localhost:8080/users/"+code)
      .then((response) => {
        dispatch(deleteUser());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
export const addUserFunction = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("http://localhost:8080/users",data)
      .then((response) => {
        dispatch(addUser());
        //toast.success('Added user successfully');
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};