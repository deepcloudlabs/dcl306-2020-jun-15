import * as React from "react";

export default class Mastermind extends React.Component {
    MAX_COUNTER = 100;

    constructor(props, context) {
        super(props, context);
        this.state = {
            gameLevel: 3,
            tries: 0,
            moves: [],
            counter: this.MAX_COUNTER,
            guess: 123,
            secret: this.createSecret(3)
        };
    }

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
                            <span className="badge badge-info" id="gamelevel">{this.state.gameLevel}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tries">Tries:</label>
                            <span className="badge badge-info" id="tries">{this.state.tries}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="guess">Guess:</label>
                            <input type="text"
                                   value={this.state.guess}
                                   onChange={this.handleInputGuess}
                                   id="guess"
                                   className="form-control"></input>
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

    handleInputGuess = (e) => {
        let value = Number(e.target.value);
        this.setState({guess: value});
    }

    createSecret = (level) => {
        let digits = [];
        digits.push(this.createDigit(1, 9));
        while (digits.length < level) {
            let digit = this.createDigit(0, 9);
            if (!digits.includes(digit))
                digits.push(digit);
        }
        let value = 0;
        for (let digit of digits)
            value = 10 * value + digit;
        console.log(`Secret is created: ${value}`);
        return value;
    }

    createDigit = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}