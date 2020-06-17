import {connect} from "react-redux";
import EmployeeList from "./employee-list-component";

let mapStateToProps = function (store) {
    return {
        // props.employees <-- store.employeeListStore.employees
        employees: store.employeeListStore.employees // field
    }
};
let mapDispatchToProps = function (dispatch) {
    return {
        findEmployees: () => {
            fetch("http://localhost:4001/employees")
                .then(res => res.json())
                .then( employees => dispatch({type: "retrieve", employees}) );
        }
    }
}

let EmployeeListConnector =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EmployeeList);
export default EmployeeListConnector;