import React, {Component} from 'react';
import Post from './Post';

import style from '../../../component-styles/MyPosts.module.css'

class MyPosts extends Component {
    render(){

        const {post, addPost, updateNewPostText, newPostText} = this.props;

        let postUsers = post.map((p) => {
            return <Post text={p.text} likesCount={p.likesCount}/>
        });

        let newPostElement = React.createRef();

        let addPostCust = () => {
            addPost();
            updateNewPostText('');
        }

        let onPostChange = () => {
            let text = newPostElement.current.value;
            updateNewPostText(text);
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

