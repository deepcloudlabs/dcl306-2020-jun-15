import * as React from "react";

export default class Lottery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers : [],
            column : 1
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
                          <button className="btn btn-success">Draw</button>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}