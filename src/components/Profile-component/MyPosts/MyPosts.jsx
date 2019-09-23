import React from 'react';
import Post from './Post';

import style from '../../../component-styles/MyPosts.module.css';

const MyPosts = (props) => {
    let postUsers = props.posts.map((p) => {return <Post text={p.text} likesCount={p.likesCount} key={p.id}/>});

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewText(text);
    }

    return (
        <div className={style.posts_container}>
            <h4>my posts</h4>
            <div>
                <textarea 
                onChange = {onPostChange} 
                value = {props.newPostText} />
                <button onClick = {onAddPost}>Add post</button>
            </div>
            <div>
                {postUsers}
            </div>
        </div>
    );
}; 

export default MyPosts;

