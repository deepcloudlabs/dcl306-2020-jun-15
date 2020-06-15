import * as React from "react";

export default class Lottery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            column: 1
        }
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Lottery</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="column">Column:</label>
                            <input id="column"
                                   name="column"
                                   className="form-control"
                                   type="text"></input>
                            <button className="btn btn-success" onClick={this.draw()}>Draw</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    draw = () => { // arrow function, lambda expression
        let numbers = [];
        for (let i = 0; i < this.state.column; ++i) {
            numbers.push(this.createLotteryNumbers());
        }
        this.setState({
            numbers: numbers
        })
    }

    createLotteryNumbers = () => {
        let numbers = [];
        while (numbers.length < 6) {
            let number = this.createNumber();
            if (!numbers.includes(number))
                numbers.push(number);
        }
        return numbers;
    }

    createNumber = (min = 1, max = 49) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}