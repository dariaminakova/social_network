import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export default function AuthHOC(WrappedComponent) {
  class Wrapper extends Component {
    render() {
      const { isAuth } = this.props;
      if (!isAuth) return <Redirect to="/login" />;

      return <WrappedComponent {...this.props} />;
    }
  }

  const WithConnectRedirect = connect(mapStateToPropsForRedirect)(Wrapper);

  return WithConnectRedirect;
}
