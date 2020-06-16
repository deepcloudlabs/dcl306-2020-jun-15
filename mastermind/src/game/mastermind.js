import * as React from "react";

export default class Mastermind extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Game Console</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="gamelevel">Game Level:</label>
                            <span id="gamelevel"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gamelevel">Tries:</label>
                            <span id="gamelevel"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="guess">Guess:</label>
                            <input type="text" id="guess" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success">Play</button>
                        </div>
                    </div>
                </div>
                <p></p>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Moves</h4>
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Guess</th>
                                    <th>Evaluation</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}