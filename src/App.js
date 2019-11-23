import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProfileComponent from "./components/Profile-component/ProfileComponent";
import NavBarContainer from "./components/NavBarContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";

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
        </Switch>
      </div>
    </div>
  );
};

export default App;
