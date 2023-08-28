import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUserFunction } from "../Redux/Action";

export default function AddUser() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [role,setRole] = useState('staff');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
const handleSubmit = (e)=>{
  e.preventDefault();
  const userObject = {name,email,phone,role};
  dispatch(addUserFunction(userObject));
  navigate('/user');
  //console.log(userObject);
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header">
          <h1>Add User</h1>
        </div>
        <div className="card-body" style={{textAlign:'left'}}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label>Name</label>
                <input className="form-control" value={name} onChange={e=>setName(e.target.value)}></input>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)}></input>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Phone</label>
                <input className="form-control" value={phone} onChange={e=>setPhone(e.target.value)}></input>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Role</label>
                <select className="form-control" value={role} onChange={e=>setRole(e.target.value)}>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
            </div>
            
          </div>
        </div>
        <div className="card-footer" style={{ textAlign: "left" }}>
          <button className="btn btn-primary" type="submit">submit</button>
          <Link className="btn btn-danger" to={"/user"}>
            Back
          </Link>
        </div>
      </div>
      </form>
    </>
  );
}
