var initialstate = {
    count: 0
}

function reducer(state=initialstate,action){
    console.log("reducer called",action);
    if(action.type==="INC"){
        return {count:state.count+1}
    }
    if(action.type==="DEC"){
        return {count:state.count-1}
    }
    return state
}

export default reducer;