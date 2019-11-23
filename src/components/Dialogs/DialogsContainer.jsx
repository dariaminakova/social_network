import {
  sendMessageCreator,
  updateMessageAriaCreator
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {store => {
//                 let state = store.getState().messagesPage;

//                 let sendMessage = () => {
//                 store.dispatch(sendMessageCreator());
//                 }

//                 let changeMessageAria = (text) =>{
//                 store.dispatch(updateMessageAriaCreator(text));

//                 }

//                 return ( <Dialogs sendMessage = {sendMessage}
//                                 updateMessageAria = {changeMessageAria}
//                                 messagesPage = {state}/> );
//                     }}
//     </StoreContext.Consumer>
// };

let mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateMessageAria: text => {
      dispatch(updateMessageAriaCreator(text));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
