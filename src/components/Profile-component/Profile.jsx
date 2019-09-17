import React from 'react';
// import style from '../../component-styles/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
            post={props.profilePage.postsObj} 
            newPostText={props.profilePage.newPostText} 
            dispatch={props.dispatch} />
        </div>
    );
}; 

export default Profile;