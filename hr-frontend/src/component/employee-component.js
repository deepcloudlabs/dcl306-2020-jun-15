import * as React from "react";

export default class Employee extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Employee Panel</h1>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="identityNo">Identity No:</label>
                        <input type="text"
                               name="identityNo"
                               value={this.props.employee.identityNo}
                               onChange={this.props.handleInput}
                               id="identityNo"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname">Fullname:</label>
                        <input type="text"
                               name="fullname"
                               value={this.props.employee.fullname}
                               onChange={this.props.handleInput}
                               id="fullname"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iban">Iban:</label>
                        <input type="text"
                               name="iban"
                               value={this.props.employee.iban}
                               onChange={this.props.handleInput}
                               id="iban"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input type="text"
                               name="salary"
                               id="salary"
                               value={this.props.employee.salary}
                               onChange={this.props.handleInput}
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthYear">Birth Year:</label>
                        <input type="text"
                               name="birthYear"
                               value={this.props.employee.birthYear}
                               onChange={this.props.handleInput}
                               id="birthYear"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select name="department"
                                id="department"
                                value={this.props.employee.department}
                                onChange={this.props.handleInput}
                                className="form-control">
                            <option>IT</option>
                            <option>SALES</option>
                            <option>HR</option>
                            <option>FINANCE</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Photo:</label>
                        <img className="img-thumbnail"
                             src={this.props.employee.photo}
                             style={{width: '128px', height: '128px'}}
                             alt="employee"></img>
                        <label className="btn btn-info">
                            <input type="file"
                                   style={{display: "none"}}
                                   onChange={this.props.handleFileInput}
                                   className="form-control"
                                   name="photo"
                                   id="photo"></input>
                            <span>File</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                            <input type="checkbox"
                                   name="fulltime"
                                   id="fulltime"
                                   chekced={this.props.employee.fulltime}
                                   onChange={this.props.handleInput}
                                   className="form-check-input"></input>
                            <label htmlFor="fulltime">Full time?</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success"
                                onClick={this.props.findEmployee}>Find Employee
                        </button>
                        <button type="submit" className="btn btn-success"
                                onClick={this.props.hireEmployee}>Hire Employee
                        </button>
                        <button type="submit" className="btn btn-danger"
                                onClick={this.props.fireEmployee}>Fire Employee
                        </button>
                        <button type="submit" className="btn btn-warning"
                                onClick={this.props.updateEmployee}>Update Employee
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}