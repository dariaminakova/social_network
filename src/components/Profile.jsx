import React from 'react';
import style from '../component-styles/Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.cover_img} 
                src="https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg" />
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Profile;