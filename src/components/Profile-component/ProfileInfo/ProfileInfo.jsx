import React from 'react';

// Components
import Preloader from '../../common/preloader/Preloader';
import StatusProfile from './components/StatusProfile/StatusProfile';

// Styles
import style from '../../../component-styles/ProfileInfo.module.css';

function ProfileInfo(props) {
  const { profile, status, updateStatus } = props;

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.profile_container}>
        <img src={profile.photos.large} alt="ava" />
        <StatusProfile status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;
