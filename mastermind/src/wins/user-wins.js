import * as React from "react";
import {Link} from "react-router-dom";

export default class UserWins extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Mastermind</h4>
                    </div>
                    <div className="card-body">
                        <h1>Tebrikler!!!</h1>
                        <Link to="/console">Want to play again?</Link>
                    </div>
                </div>
            </div>
        );
    }
}