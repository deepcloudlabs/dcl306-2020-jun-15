import Employee from "./employee-component";
import {connect} from "react-redux";


let mapStateToProps = function(state){
    return {
        employee: state.employeeStore.employee // field
    }
};
let mapDispatchToProps = function(dispatch){
    return {
        findEmployee : function(dispatch){},
        fireEmployee : function(dispatch){},
        hireEmployee : function(dispatch){},
        updateEmployee : function(dispatch){},
        handleInput : function(event){
            return dispatch({type: "change", event});
        },
        handleFileInput : function(event){
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                dispatch({type: "handleFile", data : e.target.result });
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