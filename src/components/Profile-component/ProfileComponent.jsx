import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";
import {
  userProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
// import AuthHOC from "../../shared/HOC/AuthHOC";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1752; // my id
    }
    this.props.userProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { userProfile, getStatus, updateStatus }),
  withRouter
  // AuthHOC
)(ProfileComponent);
