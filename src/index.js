// Modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import App from "./App";

// Engine
import store from "Engine/redux-store";

// Styles
import "./index.css";

// let rerenderEntireTree = (state) =>{
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// }

// rerenderEntireTree();
// store.subscribe (() =>{
//     rerenderEntireTree()
// });
