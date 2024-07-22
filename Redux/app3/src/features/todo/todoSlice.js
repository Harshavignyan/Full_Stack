import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todolist: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addtodo: (state, action) => {
            state.todolist.push(action.payload)
        }
    }
})

export const {addtodo} = todoSlice.actions
export default todoSlice.reducer