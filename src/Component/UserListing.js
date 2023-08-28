import React, { useEffect } from "react";
import { fetchUserList, removeUser } from "../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import {toas} from "react-toastify"

function UserListing(props) {
  useEffect(() => {
    props.loadUser();
  }, []);
  const handleDelete = (code) => {
    if (window.confirm("Do you want to remove")) {
      props.removeUser(code);
      props.loadUser();
      //stoast.success("user removed successfully");
    }
  };
  return props.user.loading ? (
    <div>
      <h2>loading...</h2>
    </div>
  ) : props.user.errMessage ? (
    <div>
      <h2>{props.user.errMessage}</h2>
    </div>
  ) : (
    <div className="card">
      <div className="card-header">
        <Link className="btn btn-success" to={"/user/add"}>
          Add user
        </Link>
        <h2>User listing</h2>
      </div>
      <div className="card-body">
        <table className="table table-bordered" border={1}>
          <thead className="bg-dark text-white">
            <tr>
              <td>Code</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {props.user.userList &&
              props.user.userList.map((item) => {
                // console.log(item.name);
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-primary"
                      >
                        edit
                      </Link>
                      |
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUserList()),
    removeUser: (code)=>dispatch(removeUser(code))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
