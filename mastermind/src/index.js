import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Mastermind from "./game/mastermind";
import 'bootstrap/dist/css/bootstrap.css';
import {Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import UserWins from "./wins/user-wins";

const routing = (
    <Router>
        <Route path="/" exact component={App}></Route>
        <Route path="/console" component={Mastermind}></Route>
        <Route path="/wins" component={UserWins}></Route>
    </Router>
);

ReactDOM.render(routing,document.getElementById('root'));

/*
ReactDOM.render(
  <React.StrictMode>
    <Mastermind />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
