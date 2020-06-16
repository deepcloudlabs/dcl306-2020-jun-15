import React from 'react';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Mastermind</h4>
        </div>
        <div className="card-body">
          <h1>Welcome to the Game!</h1>
          <Link to="/console">Go to Game Console!</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
