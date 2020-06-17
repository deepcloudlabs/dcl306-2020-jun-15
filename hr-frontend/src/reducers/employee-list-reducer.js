export default function EmployeeListReducer(state, action) {
    if (state === undefined) {
        return {
            employees: []
        }
    }
    let newState = {...state};
    switch(action.type){
        case "retrieve":
            newState.employees = action.employees;
            break;
    }
    return newState;
}