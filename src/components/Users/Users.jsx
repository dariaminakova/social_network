import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user-icon-image.jpg";
import style from "../../component-styles/Users.module.css";

const Users = (props) => {
  const {
    currentPage,
    totalCount,
    pageSize,
    onPageChanged,
    users,
    followingInProgress,
    follow,
    unfollow,
  } = props;
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={currentPage === p && style.selectedPage}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {users.map((u) => (
        <div key={u.id}>
          <div className={style.avatar}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="avatar"
              />
            </NavLink>
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
          <div>
            {u.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  unfollow(u.id);
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  follow(u.id);
                }}
              >
                follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
