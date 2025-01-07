import React from 'react'
import { createContext, useContext } from 'react'
const ComponentA =()=>{
    return (
        <>
        <h1>Componet A</h1>
        <ComponentB/>
        </>
    )
}
const ComponentB =()=>{
    return (
        <>
        <h1>Componet B</h1>
        <ComponentC/>
        </>
    )
}

const ComponentC =()=>{
    const value = useContext(ValueContext)
    console.log(value)
    return (
        <>
        <h1>Componet C {value} </h1>
        </>
    )
}
export const ValueContext = createContext();
const UseContext = () => {
    //the context api is uded to share data like state, 
    // function cross the component tree without passing rops down manually at every level.
    // It avoid prop drilling by simplyfing state management and sharing data across components.
    //with context api the data is share directly with the child component who will consume it

    //1. the createContext() method is used to create a context. This function returns a context object with the provider and consumer 
    //2. The provider is used to wrap the part of component tree where you want the context to be available.
    //It accepts a compulsory value prop that holds the data you want to share across other components
    //3. The useContext() hook is used to access data.

    
 
  return (
    <>
    <ValueContext.Provider value='saurabh'>
    <h1>
     UseContext
     <ComponentA/>
    </h1>
    </ValueContext.Provider>
     </>
  )
}

export default UseContext