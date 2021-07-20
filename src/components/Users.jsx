import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_users, delete_user } from "../redux/actions/userActions";
export default function Users() {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.userReducer);

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    dispatch(fetch_users());
  }, [dispatch]);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  return (
    <>
      {error && (
        <div
          class="alert alert-danger d-flex justify-content-center align-items-center"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>{error}</div>
        </div>
      )}
      {loading ? (
        "Loading"
      ) : (
        <div className="container-fluid">
          <div className="users-list container-fluid w-75 my-4 shadow overflow-hidden rounded-3">
            <div className="row border-bottom bg-light p-3 fw-bold">
              <div className="col-1 text-center">#</div>
              <div className="col-3">Name</div>
              <div className="col-2">Username</div>
              <div className="col-3">Email</div>
              <div className="col-1 text-center">Admin</div>
              <div className="col-2 text-center">Actions</div>
            </div>

            {usersList &&
              usersList.map((user, index) => {
                return (
                  <div className="row border-bottom p-3" key={user._id}>
                    <div className="col-1 text-center">{index + 1}</div>
                    <div className="col-3">{user.name}</div>
                    <div className="col-2">{user.username}</div>
                    <div className="col-3">{user.email}</div>
                    <div className="col-1 text-center">
                      {user.isAdmin ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#198754"
                          className="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-2 text-center">
                      <div className="btn btn-sm btn-light disabled">Edit</div>
                      <div
                        className="btn btn-sm btn-danger ms-3"
                        onClick={() => {
                          dispatch(delete_user(user._id));
                        }}
                      >
                        Delete
                      </div>
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
