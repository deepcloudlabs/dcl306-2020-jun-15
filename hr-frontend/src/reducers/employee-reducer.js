import EmployeeModel from "../model/employee";
import {showSuccessMessage} from "../utility/toastr-util";

export default function EmployeeReducer(state, action) {
    if (state === undefined) {
        return {
            employee: new EmployeeModel()
        }
    }
    let newState = {...state};
    newState.employee = {...state.employee}
    switch (action.type) {
        case "change":
            if (action.event.target.name === "fulltime") {
                // checkbox
                newState.employee.fulltime = !newState.employee.fulltime;
            } else {
                // other inputs
                newState.employee[action.event.target.name] = action.event.target.value;
            }
            break;
        case "handleFile":
            // input file
            newState.employee.photo = action.data;
            showSuccessMessage("Image is loaded!");
            break;
        default:
            break;
    }
    return newState;
}