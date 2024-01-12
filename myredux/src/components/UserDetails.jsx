import React from "react";
import  DeleteAllUser  from "./DeleteAllUser";
import {fakeUserData} from "../api/main.jsx";
import {useDispatch} from "react-redux";
import {addUser} from "../store/slices/UserSlice.jsx";
import DisplayUsers from "../components/DisplayUsers"


const UserDetails = () => {

  const dispatch = useDispatch()
  const addNewUser = (name ) => {
    dispatch(addUser(name))
  }

  return (
    <div>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={() => addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </div>
  );
};


export default UserDetails;