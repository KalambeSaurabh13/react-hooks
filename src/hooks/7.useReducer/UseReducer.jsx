import React, { useReducer } from 'react'

const UseReducer = () => {
  // The useReducer Hook is another way to manage state in React applications.
  //  As your application grows, its state gets more and more complex. 
  // With time, it becomes difficult to handle complex state logic with useState Hook.

// useReducer offers a more structured way to manage complex state by handling all state updates in a reducer function. 
// This makes state management easier since all the state update logic is at one place.

// Explanation

// We define a reducer function that accepts the current state and an action object as arguments. 
// The action object contains the action type (a string) and payload (data passed to the action).

// The useReducer Hook accepts the reducer function and an initial state, 
// and returns an array containing the current state and a dispatch method.

// To update state, we call the dispatch method and pass the action type and payload in an object.
//  We call this process, "dispatching an action".
const initialState ={
  count:0
}

const reducer = (state, action)=>{
  switch(action.type){
    case'increment':
      return {...state,count: state.count+action.payload}
    case'decrement':
      return {...state,count: state.count-action.payload}
    case 'reset':
      return {...state,count: 0}
  }
}

const [state,dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <h1>UseReducer</h1>

    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:'increment',payload:1})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement',payload:1})}>Decrement</button>
    <button onClick={()=>dispatch({type:'increment',payload:5})}>Increment By 5</button>
    <button onClick={()=>dispatch({type:'decrement',payload:5})}>Decrement By 5</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

    </>
  )
}

export default UseReducer