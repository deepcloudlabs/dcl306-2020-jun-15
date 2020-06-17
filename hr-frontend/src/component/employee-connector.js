import Employee from "./employee-component";
import {connect} from "react-redux";


let mapStateToProps = function(store){
    return {
        employee: store.employeeStore.employee // field
    }
};
let mapDispatchToProps = function(dispatch){
    return {
        findEmployee : function(dispatch){},
        fireEmployee : function(dispatch){},
        hireEmployee : async (emp) => {
            let response = await fetch("http://localhost:4001/employees",{
                method: "POST",
                headers : {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(emp)
            }).then(res => res.json());
            return dispatch({type: "hire", response});
        },
        updateEmployee : function(dispatch){},
        handleInput : (event) => {
            let changeInputAction = {type: "change", event};
            return dispatch(changeInputAction);
        },
        handleFileInput : (event) => {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                dispatch({type: "handleFile", photo : e.target.result });
            }
        }
    };
};
let EmployeeConnector =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Employee);
export default EmployeeConnector;