import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/actions'

function Todolist({todoReducer:{todolist},dispatch}){
    var [newTask,setNewTask] = React.useState('')
    function handleNewTask(e){
        setNewTask(e.target.value)
    }
    return (
        <div>
            <h1>Todos</h1>
            <input type="text" onChange={handleNewTask}/>
            <button onClick={() => {dispatch(addTodo(newTask))}}>Add Todo</button>
            <ul>
                {
                    todolist?.map((t,i) => {
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default connect(store => store) (Todolist)