// Modules
import { connect } from 'react-redux';

// Components
import MyPosts from './MyPosts';

// Engine
import { addPostCreator, updateNewTextCreator } from 'Engine/profileReducer';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPostCreator,
  updateNewTextCreator,
})(MyPosts);

export default MyPostsContainer;
