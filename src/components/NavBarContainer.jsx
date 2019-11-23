import NavBar from "./NavBar";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;
