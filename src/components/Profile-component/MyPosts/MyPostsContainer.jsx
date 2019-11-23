import MyPosts from "./MyPosts";
import {
  addPostCreator,
  updateNewTextCreator
} from "../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateNewText: text => {
      let action = updateNewTextCreator(text);
      dispatch(action);
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = (props) => {
//     let state = props.store.getState().profilePage;

//     let addPost = () => {
//         props.store.dispatch(addPostCreator());
//     }

//     let changePost = (text) => {
//         let action = updateNewTextCreator(text);
//         props.store.dispatch(action);
//     }

//     return (<MyPosts updateNewText = {changePost}
//                      addPost = {addPost}
//                      posts = {state.posts}
//                      newPostText = {state.newPostText} />    );
// };
