import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user-icon-image.jpg";
import style from "../../component-styles/Users.module.css";
import { userAPI } from "../../api/api";

const Users = props => {
  const {
    currentPage,
    totalCount,
    pageSize,
    onPageChanged,
    users,
    followingInProgress,
    setFollowingInProgress,
    follow,
    unfollow
  } = props;
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(p => {
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
      {users.map(u => (
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
                disabled={followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  setFollowingInProgress(true, u.id);
                  userAPI.unfollowUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      unfollow(u.id);
                    }
                    setFollowingInProgress(false, u.id);
                  });
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  setFollowingInProgress(true, u.id);
                  userAPI.followUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      follow(u.id);
                    }
                    setFollowingInProgress(false, u.id);
                  });
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
