import React from 'react';
import { connect } from 'react-redux';

function Counter({count,incCount,decCount}){
    console.log(count);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={incCount}>Increment</button>
            <button onClick={decCount}>Decrement</button>
        </div>
    )
}

function mapStateToProps(state){
    return state.counter
}

function mapDispatchToProps(dispatch){
    return{
        incCount:() => {
            dispatch({type:'INC'})
        },
        decCount:() => {
            dispatch({type:'DEC'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);