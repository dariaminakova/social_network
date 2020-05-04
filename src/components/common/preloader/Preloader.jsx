import React from "react";
import style from "../../../component-styles/Preload.module.css";
import preloader from "../../../assets/images/loader.gif";

let Preloader = (props) => {
  return (
    <div className={style.preload_pic}>
      <img src={preloader} alt="prelaod" />
    </div>
  );
};

export default Preloader;
