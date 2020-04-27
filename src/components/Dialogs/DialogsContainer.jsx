import {
  sendMessageCreator,
  updateMessageAriaCreator,
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import AuthHOC from "../../shared/HOC/AuthHOC";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateMessageAria: (text) => {
      dispatch(updateMessageAriaCreator(text));
    },
  };
};

const AuthRedirect = AuthHOC(Dialogs);
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirect);

export default DialogsContainer;
