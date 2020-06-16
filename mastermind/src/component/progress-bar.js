import * as React from "react";

export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress">
                <div role="progressbar"
                     style={{width: "70%"}}
                     className="progress-bar bg-primary">

                </div>
            </div>
        );
    }
}