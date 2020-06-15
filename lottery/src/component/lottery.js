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
                            <button className="btn btn-success" onClick={this.draw}>Draw</button>
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
                                   {
                                      Array.from(Array(6).keys()).map( col => <th key={col}>Column #{col+1}</th>)
                                   }
                               </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.numbers.map( (nums,idx) => <tr key={idx}>{
                                    nums.map(num => <td key={num}>{num}</td>)
                                }</tr>)
                            }
                            </tbody>
                        </table>
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
        numbers.sort((x,y)=>x-y);
        return numbers;
    }

    createNumber = (min = 1, max = 49) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}