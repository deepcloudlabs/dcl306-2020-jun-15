import * as React from "react";

export default class Lottery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            column: 1
        }
    }

    /*
    componentDidMount() {
        setInterval(()=>{
            let newColumn = this.state.column + 1;
            this.setState({
                column: newColumn
            });
        }, 1000);
    }
*/
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
                                   value={this.state.column}
                                   onChange={this.handleColumnChange}
                                   className="form-control"
                                   type="text"></input>
                            <button className="btn btn-success" onClick={this.draw}>Draw</button>
                            <button className="btn btn-warning" onClick={this.resetNumbers}>Reset</button>
                        </div>
                    </div>
                </div>
                <p></p>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Lottery Numbers</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-responsive table-hover">
                            <thead>
                            <tr>
                                <th>No</th>
                                {
                                    Array.from(Array(6).keys()).map(col => <th key={col}>Column #{col + 1}</th>)
                                }
                                <th>Operations</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.numbers.map((nums, idx) => <tr key={idx}>
                                    <td>{idx+1}</td>{
                                    nums.map(num => <td key={num}>{num}</td>)
                                }
                                    <td>
                                        <button onClick={() => this.removeRow(idx)}
                                                className="btn btn-danger">Remove</button>
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    draw = () => { // arrow function, lambda expression
        let numbers = Array.from(this.state.numbers);
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
        numbers.sort((x, y) => x - y);
        return numbers;
    }

    createNumber = (min = 1, max = 49) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleColumnChange = (event) => {
        let newColumn = Number(event.target.value);
        console.log(`new column value has arrived: ${newColumn}`);
        // This state change is asynchronous
        /*
        this.setState({
            column: newColumn
        })
         */
        this.setState((state, props) => {
                // Rest API call: Fetch Api (ES 6)
                // File Api (HTML 5)
                return { // this is new state
                    column: newColumn
                }
            }, () => console.log(this.state.column)
        );

    }

    resetNumbers = () => {
        this.setState({
            numbers: []
        })
    }

    removeRow = (index) => {
        // functional programming -> functional way of thinking!
        let newNumbers = this.state.numbers.filter((num,idx) => index !== idx);
        this.setState({
            numbers: newNumbers
        })
    }
}