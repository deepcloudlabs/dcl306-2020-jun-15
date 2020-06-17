import {connect} from "react-redux";
import EmployeeList from "./employee-list-component";
import {Store as store} from "redux";

let mapStateToProps = function (store) {
    return {
        // props.employees <-- store.employeeListStore.employees
        employees: store.employeeListStore.employees
    }
};
let mapDispatchToProps = function (dispatch) {
    let count = 0;
    return {
        findEmployees: () => {
            count++;
            fetch(`http://localhost:4001/employees?_${count}`)
                .then(res => res.json())
                .then( employees => dispatch({type: "retrieve", employees}) );
        },
        fireEmployeeRow: (identityNo) => {
            fetch(`http://localhost:4001/employees/${identityNo}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            }).then(res => res.json())
                .then( employee => dispatch({type: "firerow", fired: employee}))
        }
    }
}

let EmployeeListConnector =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EmployeeList);
export default EmployeeListConnector;