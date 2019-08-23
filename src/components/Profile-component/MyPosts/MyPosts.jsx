import React, {Component} from 'react';
import Post from './Post';

class MyPosts extends Component {
    render(){
        return (
            <div>
            my posts
            <div>
                new post
            </div>
            <div>
                <Post />
                <Post />
            </div>
        </div>
        );
    }
}; 

export default MyPosts;

