var initialstate = {
    todolist: []
}

function todoReducer(state=initialstate,action){
    // console.log("reducer called",action);
    if(action.type==="ADDTASK"){
        return {todolist: [...state.todolist,action.payload]}
    }
    return state
}

export default todoReducer;