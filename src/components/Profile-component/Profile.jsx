import React, {Component} from 'react';
// import style from '../../component-styles/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
    render(){
    const {profilePage, addPost, updateNewPostText} = this.props;
        return (
            <div>
                <ProfileInfo />
                <MyPosts 
                post={profilePage.postsObj} 
                newPostText={profilePage.newPostText} 
                addPost={addPost} 
                updateNewPostText = {updateNewPostText} />
            </div>
        );
    }
}; 

export default Profile;