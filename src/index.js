import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) =>{
    debugger
    ReactDOM.render(<BrowserRouter>
    <App 
    state={state} 
    dispatch={ store.dispatch.bind(store) } />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe (() =>{
    let state = store.getState();
    rerenderEntireTree(state)
});
serviceWorker.unregister();
