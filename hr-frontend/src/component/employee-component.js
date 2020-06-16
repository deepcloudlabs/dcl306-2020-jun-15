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
                               id="identityNo"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname">Fullname:</label>
                        <input type="text"
                               name="fullname"
                               id="fullname"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iban">Iban:</label>
                        <input type="text"
                               name="iban"
                               id="iban"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input type="text"
                               name="salary"
                               id="salary"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthYear">Birth Year:</label>
                        <input type="text"
                               name="birthYear"
                               id="birthYear"
                               className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select name="department"
                                id="department"
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
                             style={{width: '128px', height: '128px'}}
                             alt="employee photo"></img>
                        <label className="btn btn-info btn-file">
                            <input type="file"
                                   className="form-control"
                                   name="photo"
                                   id="photo"></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                            <input type="checkbox"
                                   name="fulltime"
                                   id="fulltime"
                                   className="form-check-input"></input>
                            <label htmlFor="fulltime">Full time?</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}