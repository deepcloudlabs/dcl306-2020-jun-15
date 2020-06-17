import * as React from "react";

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Employee List</h1>
                    <button  onClick={this.props.findEmployees}
                             className="btn btn-success">Retrieve All</button>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Photo</th>
                                <th>Identity No</th>
                                <th>Full Name</th>
                                <th>Birth Year</th>
                                <th>IBAN</th>
                                <th>Salary</th>
                                <th>Department</th>
                                <th>Fulltime</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.employees.map( (emp,index) => <tr key={emp.identityNo}>
                                <td>{index+1}</td>
                                <td><img style={{width: "64px", height: "64px"}}
                                         src={emp.photo} alt="emps photo"></img></td>
                                <td>{emp.identityNo}</td>
                                <td>{emp.fullname}</td>
                                <td>{emp.birthYear}</td>
                                <td>{emp.iban}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.department}</td>
                                <td>{emp.fulltime ? 'FULL-TIME' : 'PART-TIME'}</td>
                                <td><button onClick={() => this.props.fireEmployeeRow(emp.identityNo)}
                                            className="btn btn-danger">Fire</button></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}