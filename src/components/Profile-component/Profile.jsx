import React, {Component} from 'react';
import style from '../../component-styles/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

class Profile extends Component {
    render(){
        return (
            <div>
                <div>
                    <img className={style.cover_img} 
                    src="https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg" />
                </div>
                <div>
                    avatar + description
                </div>
                <MyPosts />
            </div>
        );
    }
}; 

export default Profile;