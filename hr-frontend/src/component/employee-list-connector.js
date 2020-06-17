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
            // TODO: implement find employees
        }
    }
}

let EmployeeListConnector =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EmployeeList);
export default EmployeeListConnector;