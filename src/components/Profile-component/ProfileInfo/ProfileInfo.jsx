import React, {Component} from 'react';
import style from '../../../component-styles/ProfileInfo.module.css';

class ProfileInfo extends Component {
    render(){
        return (
            <div>
                <div>
                    <img className={style.cover_img} 
                    src="https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg" />
                </div>
                <div className={style.profile_container}>
                    avatar + description
                </div>
            </div>
        );
    }
}; 

export default ProfileInfo;