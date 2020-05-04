import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";
import { userProfile } from "../../redux/profileReducer";
// import AuthHOC from "../../shared/HOC/AuthHOC";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1752; // my id
    }
    this.props.userProfile(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { userProfile }),
  withRouter
  // AuthHOC
)(ProfileComponent);
