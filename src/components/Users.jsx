import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_users } from "../redux/actions/userActions";
export default function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  const isLoading = useSelector((state) => state.userReducer.loading);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    dispatch(fetch_users());
  }, []);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  console.log(users);
  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div className="container">
          <div className="users-list my-4 ">
            <div className="row border-bottom bg-light p-2 fw-bold  text-center">
              <div className="col-1">#</div>
              <div className="col ">Name</div>
              <div className="col ">Username</div>
              <div className="col ">Email</div>
              <div className="col-2">Admin</div>
            </div>
            {/* <div className="row border-bottom p-2">
              <div className="col-1 ">1</div>
              <div className="col ">Keshav Kishor Ram</div>
              <div className="col ">keshavram</div>
              <div className="col ">keshavram19@@kmclalitpur.edu.np</div>
            </div> */}
            {usersList &&
              usersList.map((user, index) => {
                return (
                  <div className="row border-bottom p-2 text-center">
                    <div className="col-1 ">{index + 1}</div>
                    <div className="col">{user.name}</div>
                    <div className="col ">{user.username}</div>
                    <div className="col ">{user.email}</div>
                    <div className="col-2">{user.isAdmin.toString()}</div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
