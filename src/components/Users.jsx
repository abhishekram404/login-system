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
        <div className="container-fluid">
          <div className="users-list container-fluid w-75 my-4 shadow overflow-hidden rounded-3">
            <div className="row border-bottom bg-light p-3 fw-bold">
              <div className="col-1 text-center">#</div>
              <div className="col-3">Name</div>
              <div className="col-2">Username</div>
              <div className="col-4">Email</div>
              <div className="col-2 text-center">Admin</div>
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
                  <div className="row border-bottom p-3">
                    <div className="col-1 text-center">{index + 1}</div>
                    <div className="col-3">{user.name}</div>
                    <div className="col-2">{user.username}</div>
                    <div className="col-4">{user.email}</div>
                    <div className="col-2 text-center">
                      {user.isAdmin ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#198754"
                          class="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
