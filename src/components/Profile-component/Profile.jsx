import React, {Component} from 'react';
// import style from '../../component-styles/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
    render(){
    const {state, addPost} = this.props;
        return (
            <div>
                <ProfileInfo />
                <MyPosts post={state.postsObj} addPost={addPost} />
            </div>
        );
    }
}; 

export default Profile;