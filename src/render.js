import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state, addPost) =>{
    ReactDOM.render(<BrowserRouter>
    <App appState={state} addPost={ addPost }/>
    </BrowserRouter>, document.getElementById('root'));

}
serviceWorker.unregister();
