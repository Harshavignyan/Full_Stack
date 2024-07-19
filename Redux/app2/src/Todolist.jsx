import React from 'react'
import { connect } from 'react-redux'


function Todolist({todos,addTodo}){
    var [newTask,setNewTask] = React.useState('')
    function handleNewTask(e){
        setNewTask(e.target.value)
    }
    return (
        <div>
            <h1>Todos</h1>
            <input type="text" onChange={handleNewTask}/>
            <button onClick={() => {addTodo(newTask)}}>Add Todo</button>
            <ul>
                {
                    todos.todolist?.map((t,i) => {
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
    return {
        addTodo:(nt) => {
            dispatch({type:'ADDTASK',payload:nt})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Todolist)