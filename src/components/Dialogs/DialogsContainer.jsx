import {
  sendMessageCreator,
  updateMessageAriaCreator,
} from 'Engine/messageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import AuthHOC from '../../shared/HOC/AuthHOC';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessageCreator, updateMessageAriaCreator }),
  AuthHOC
)(Dialogs);
