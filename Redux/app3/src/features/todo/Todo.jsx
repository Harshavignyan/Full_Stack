import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtodo } from './todoSlice'

export function Todo() {
    var [nt, setNt] = useState('')
    const { todolist } = useSelector((state) => state.todolist)
    // console.log(todolist)
    const dispatch = useDispatch()
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleAddTodo = () => {
        dispatch(addtodo(nt));
        setNt(''); // Clear the input field
        inputRef.current.focus(); // Focus on the input field
    };

    return (
        <div>
            <h1 style={{ display: 'inline' }}>Todos: </h1>
            &nbsp;&nbsp;&nbsp;
            <input type='text' ref={inputRef}
                value={nt} onChange={(e) => { setNt(e.target.value) }} />
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleAddTodo}>Add</button>
            <ul style={{ listStyle: 'none' }}>
                {
                    todolist?.map((t) => {
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}