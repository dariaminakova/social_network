import React, {Component} from 'react';
import Post from './Post';

import style from '../../../component-styles/MyPosts.module.css'

class MyPosts extends Component {
    render(){

        const {post, addPost} = this.props;

        let postUsers = post.map((p) => {
            return <Post text={p.text} likesCount={p.likesCount}/>
        });

        let newPostElement = React.createRef();

        let addPostCust = () => {
            let text = newPostElement.current.value;
            addPost(text);
            newPostElement.current.value ='';
        }

        return (
            <div className={style.posts_container}>
                <h4>my posts</h4>
                <div>
                    <textarea ref = {newPostElement}></textarea>
                    <button onClick = { addPostCust }>Add post</button>
                </div>
                <div>
                    {postUsers}
                </div>
            </div>);
    }
}; 

export default MyPosts;

