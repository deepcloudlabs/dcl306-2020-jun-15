import React from 'react';
import './App.css';
import EmployeeConnector from "./component/employee-connector";
import EmployeeListConnector from "./component/employee-list-connector";

function App() {
    return (
        <div className="container">
            <EmployeeConnector></EmployeeConnector>
            <p></p>
            <EmployeeListConnector></EmployeeListConnector>
        </div>
    );
}

export default App;
