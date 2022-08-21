// Modules
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import ProfileComponent from "Components/Profile-component/ProfileComponent";
import NavBarContainer from "Components/NavBarContainer";
import News from "Components/News/News";
import Music from "Components/Music/Music";
import Settings from "Components/Settings/Settings";
import DialogsContainer from "Components/Dialogs/DialogsContainer";
import UsersContainer from "Components/Users/UsersContainer";
import HeaderContainer from "Components/header/HeaderContainer";
import Login from "Components/Login/Login";

// Styles
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBarContainer />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/profile/:userId?" render={() => <ProfileComponent />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
