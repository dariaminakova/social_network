import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AuthUser } from "../../redux/auth";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.AuthUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { AuthUser })(HeaderContainer);
