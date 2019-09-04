import React, {Component} from 'react';
import Post from './Post';
import {addPostCreator, updateNewTextCreator} from '../../../redux/state'

import style from '../../../component-styles/MyPosts.module.css';

class MyPosts extends Component {
    render(){

        const {post, dispatch, newPostText} = this.props;

        let postUsers = post.map((p) => {
            return <Post text={p.text} likesCount={p.likesCount}/>
        });

        let addPostCust = () => {
            dispatch(addPostCreator());
        }

        let onPostChange = (e) => {
            let text = e.target.value;
            dispatch(updateNewTextCreator(text));
        }

        return (
            <div className={style.posts_container}>
                <h4>my posts</h4>
                <div>
                    <textarea 
                    onChange = {onPostChange} 
                    value = {newPostText} />
                    <button onClick = { addPostCust }>Add post</button>
                </div>
                <div>
                    {postUsers}
                </div>
            </div>);
    }
}; 

export default MyPosts;

