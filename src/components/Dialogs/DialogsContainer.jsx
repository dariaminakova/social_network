import {
  sendMessageCreator,
  updateMessageAriaCreator,
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import AuthHOC from "../../shared/HOC/AuthHOC";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthHOC
)(Dialogs);
