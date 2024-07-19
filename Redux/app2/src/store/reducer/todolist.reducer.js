var initialstate = {
    todolist: ['hi']
}

function todoReducer(state=initialstate,action){
    // console.log("reducer called",action);
    if(action.type==="ADDTASK"){
        // console.log(state.todolist)
        return {todolist: [...state.todolist,action.payload]}
    }
    return state
}

export default todoReducer;