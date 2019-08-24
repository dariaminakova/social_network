import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Profile from './components/Profile-component/Profile';
import NavBar from './components/Nav-bar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'

function App() {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile' render = {() => <Profile />} />
            <Route path='/dialogs' render = {() => <Dialogs />} />
            <Route path='/news' render = {() => <News />} />
            <Route path='/music' render = {() => <Music />} />
            <Route path='/settings' render = {() => <Settings />} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
