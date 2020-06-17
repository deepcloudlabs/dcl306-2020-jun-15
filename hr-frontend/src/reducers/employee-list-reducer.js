import {Store as store} from "redux";

export default function EmployeeListReducer(state, action) {
    if (state === undefined) {
        return {
            employees: []
        }
    }
    let newState = {...state};
    switch (action.type) {
        case "retrieve":
            newState.employees = action.employees;
            break;
        case "firerow":
            let firedEmployee = action.fired;
            newState.employees = newState.employees.filter(emp => emp.identityNo !== firedEmployee.identityNo);
            break;
    }
    return newState;
}