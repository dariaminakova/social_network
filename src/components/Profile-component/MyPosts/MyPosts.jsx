import React, {Component} from 'react';
import Post from './Post';

import style from '../../../component-styles/MyPosts.module.css'

class MyPosts extends Component {
    render(){

        let postData =[
            {id: 0, text: 'Here', likesCount: 12},
            {id: 1, text: 'will', likesCount: 13},
            {id: 2, text: 'be', likesCount: 8},
            {id: 3, text: 'some', likesCount: 14},
            {id: 4, text: 'posts', likesCount: 9},
            {id: 5, text: 'from', likesCount: 17},
            {id: 6, text: 'your', likesCount: 21},
            {id: 7, text: 'users', likesCount: 5}
        ];

        let postUsers = postData.map((p) => {
            return <Post text={p.text} likesCount={p.likesCount}/>
        });

        return (
            <div className={style.posts_container}>
                <h4>my posts</h4>
            <div>
                new post
            </div>
            <div>
                {postUsers}
            </div>
        </div>
        );
    }
}; 

export default MyPosts;

