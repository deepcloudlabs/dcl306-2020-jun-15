import * as React from "react";
import PropTypes from "prop-types";

export default class ProgressBar extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        min: PropTypes.number,
        max: PropTypes.number
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            width: {width: "100%"},
            progressBarClass: "progress-bar bg-primary"
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value) {
            let newState = {...this.state};
            let progressBarWidthValue = Math.floor((100 * (this.props.value - this.props.min)) / this.props.max);
            newState.width = {width: progressBarWidthValue + "%"};
            newState.progressBarClass = "progress-bar bg-primary";
            if (progressBarWidthValue <= 60)
                newState.progressBarClass = "progress-bar bg-danger";
            else if (progressBarWidthValue <= 80)
                newState.progressBarClass = "progress-bar bg-warning";
            else if (progressBarWidthValue <= 90)
                newState.progressBarClass = "progress-bar bg-info";
            this.setState(newState);
        }
    }

    render() {
        return (
            <div className="progress">
                <div role="progressbar"
                     style={this.state.width}
                     className={this.state.progressBarClass}>
                    {this.props.value}%
                </div>
            </div>
        );
    }
}