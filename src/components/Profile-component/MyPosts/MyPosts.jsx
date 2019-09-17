import React from 'react';
import Post from './Post';
import {addPostCreator, updateNewTextCreator} from '../../../redux/profileReducer'

import style from '../../../component-styles/MyPosts.module.css';

const MyPosts = (props) => {
    let postUsers = props.post.map((p) => {return <Post text={p.text} likesCount={p.likesCount}/>});

    let addPostCust = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewTextCreator(text));
    }

    return (
        <div className={style.posts_container}>
            <h4>my posts</h4>
            <div>
                <textarea 
                onChange = {onPostChange} 
                value = {props.newPostText} />
                <button onClick = {addPostCust}>Add post</button>
            </div>
            <div>
                {postUsers}
            </div>
        </div>
    );
}; 

export default MyPosts;

