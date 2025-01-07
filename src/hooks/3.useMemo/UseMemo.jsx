import React, { memo, useMemo, useState } from 'react'
const ExpensiveComponent =()=>{
    //useMemo Hook is used to memoize the result of this calculation, so that it doesn't run on every render.
    //useMemo takes in the function and a dependency array as arguments, and returns the result of this function. 
    // It memoizes the result for the next render and returns the memoized value unless some dependency changes.

    //We have passed computedValue state inside the array, so, after running on the first render,
    //  the function will run only when computedValue changes.

    //If you update any other state, the component re-renders, but the function does not run again.
    const sum =()=>{
        console.log("calculating sum...");
        let i =0;
        for(i=0; i<=1000000000; i++){
            i= i+1
        }
        return i;
    }
    const total = useMemo(()=>{
        return sum();
    },[])
    
    return <p>sum:{total}</p>
}
const UseMemo = () => {
      const [count,setCount] = useState(0);
      
  return (
    <>
    <h1>UseMemo</h1>
    <ExpensiveComponent/>
        <button onClick={()=> setCount(count+1)}>Re Render Parent</button>
        <p>ParentCount {count}</p>
     </>
  )
}

export default UseMemo