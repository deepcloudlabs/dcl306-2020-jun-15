export default function EmployeeListReducer(state, action) {
    if (state === undefined) {
        return {
            employees: []
        }
    }
    let newState = {...state};
    switch(action.type){
        // TODO: implement actions
    }
    return newState;
}