import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import {combineReducers, createStore} from "redux";
import EmployeeReducer from "./reducers/employee-reducer";
import {Provider} from "react-redux";
import EmployeeListReducer from "./reducers/employee-list-reducer";

// reducer : (state,action) -> new state
let reducers = combineReducers({employeeStore: EmployeeReducer, employeeListStore: EmployeeListReducer});
let store = createStore(reducers);

console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, document.getElementById('root')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
