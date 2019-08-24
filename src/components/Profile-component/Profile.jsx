import React, {Component} from 'react';
// import style from '../../component-styles/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
    render(){
        return (
            <div>
                <ProfileInfo />
                <MyPosts />
            </div>
        );
    }
}; 

export default Profile;