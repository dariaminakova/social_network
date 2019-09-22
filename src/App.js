import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Profile from './components/Profile-component/Profile';
import NavBarContainer from './components/NavBarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBarContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile' render = {() => 
            <Profile />} />
            <Route path='/dialogs' render = {() => 
            <DialogsContainer />} />
            <Route path='/news' render = {() => <News />} />
            <Route path='/music' render = {() => <Music />} />
            <Route path='/settings' render = {() => <Settings />} />
          </Switch>
        </div>
      </div>
  );
};

export default App;
