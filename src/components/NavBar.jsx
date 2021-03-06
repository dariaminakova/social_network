import React from "react";
import style from "../component-styles/Nav.module.css";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  let friends = props.profilePage.friends.map(f => {
    return <li key={f.id}>{f.name}</li>;
  });

  return (
    <div className={style.nav}>
      <NavLink className={style.item} to="/profile">
        Profile
      </NavLink>
      <NavLink className={style.item} to="/users">
        Users
      </NavLink>
      <NavLink className={style.item} to="/dialogs">
        Messages
      </NavLink>
      <NavLink className={style.item} to="/news">
        News
      </NavLink>
      <NavLink className={style.item} to="/music">
        Music
      </NavLink>
      <NavLink className={style.item} to="/settings">
        Settings
      </NavLink>

      <ul className={style.f_container}>{friends}</ul>
    </div>
  );
};

export default NavBar;
