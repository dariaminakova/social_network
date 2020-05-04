import React from "react";
import style from "../../../component-styles/ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import StatusProfile from "./components/StatusProfile/StatusProfile";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.profile_container}>
        <img src={props.profile.photos.large} alt="ava" />
        <StatusProfile
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
