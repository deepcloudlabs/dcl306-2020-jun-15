import * as React from "react";

export default class GameStatistics extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Game Statistics</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="wins">Wins:</label>
                        <span id="wins">
                            <span className="badge badge-success">{this.props.wins}</span>
                            out of
                            <span className="badge badge-info">{this.props.wins + this.props.loses}</span>
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="loses">Loses:</label>
                        <span id="loses">
                            <span className="badge badge-danger">{this.props.loses}</span>
                            out of
                            <span className="badge badge-info">{this.props.wins + this.props.loses}</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}