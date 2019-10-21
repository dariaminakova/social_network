import React from 'react';
import style from '../../../component-styles/ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={style.cover_img} alt='profile-img'
                src="https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg" />
            </div>
            <div className={style.profile_container}>
                <img src={props.profile.photos.large} alt='ava' />
                avatar + description
            </div>
        </div>
    );
}; 

export default ProfileInfo;