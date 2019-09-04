import React, {Component} from 'react';
import Post from './Post';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/state'

import style from '../../../component-styles/MyPosts.module.css';

class MyPosts extends Component {
    render(){

        const {post, dispatch, newPostText} = this.props;

        let postUsers = post.map((p) => {
            return <Post text={p.text} likesCount={p.likesCount}/>
        });

        let newPostElement = React.createRef();

        let addPostCust = () => {
            dispatch(addPostActionCreator());
        }

        let onPostChange = () => {
            let text = newPostElement.current.value;
            dispatch(updateNewTextActionCreator(text));
        }

        return (
            <div className={style.posts_container}>
                <h4>my posts</h4>
                <div>
                    <textarea 
                    onChange = {onPostChange} 
                    ref = {newPostElement} 
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

