import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}