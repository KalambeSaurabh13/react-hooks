import React, { memo, useCallback, useState } from 'react'

const Button = memo(({onClick,children}) =>{
    console.log(`Rendering button: ${children}`)
    return <button style={{background:'red'}} onClick={onClick}>{children}</button>
})
const UseCallback = () => {
  
    //useCallback is similar to useMemo, the only difference is that useCallback caches the function definition itself, 
    // rather than memoizing its return value.


    const [count, setCount] = useState(0)
    const increment = useCallback(()=>{
        console.log('Increment inside');
        setCount((prevCount)=>prevCount+1)
    },[])

    const decrement = useCallback(()=>{
        console.log('decrement inside');
        setCount((prevCount)=>prevCount-1)
    },[])

    // const increment =()=> setCount(count+1)
    // const decrement =()=> setCount(count+1)

    return (
    <>
    <h1>UseCallback</h1>
    <h1>{count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>

    </>
  )
}

export default UseCallback