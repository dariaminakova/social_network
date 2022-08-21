// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from './Header';

// Engine
import { AuthUser } from 'Engine/auth';

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
