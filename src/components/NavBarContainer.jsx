// Modules
import { connect } from 'react-redux';

// Components
import NavBar from './NavBar';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;
