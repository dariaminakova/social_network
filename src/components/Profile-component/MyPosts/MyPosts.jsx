// Modules
import React from 'react';

// Components
import Post from './Post';

// Styles
import style from '../../../component-styles/MyPosts.module.css';

function MyPosts(props) {
  const { addPost, newPostText, posts, updateNewText } = props;

  const postUsers = posts.map((p) => {
    return <Post text={p.text} likesCount={p.likesCount} key={p.id} />;
  });

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    updateNewText(text);
  };

  return (
    <div className={style.posts_container}>
      <h4>my posts</h4>
      <div>
        <textarea onChange={onPostChange} value={newPostText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>{postUsers}</div>
    </div>
  );
}

export default MyPosts;
