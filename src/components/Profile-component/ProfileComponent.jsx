import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userProfile } from "../../redux/profileReducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
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

const WithRouterProfileComponent = withRouter(ProfileComponent);
const mapStateToProps = (state) => ({ profile: state.profilePage.profile });
export default connect(mapStateToProps, { userProfile })(
  WithRouterProfileComponent
);
