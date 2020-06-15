import * as React from "react";
import PropTypes from "prop-types";

// Component
export default class LotteryRow extends React.Component{
    static propTypes = {
        numbers : PropTypes.array.isRequired,
        index: PropTypes.number.isRequired,
        removeClick: PropTypes.func.isRequired
    }
    // state + props
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr key={this.props.index}>
                <td>{this.props.index+1}</td>{
                     this.props.numbers.map(num => <td key={num}>{num}</td>)
                }
                <td>
                    <button onClick={() => this.props.removeClick(this.props.index)}
                            className="btn btn-danger">Remove</button>
                </td>
            </tr>
        );
    }
}