import React from 'react'

const UseDebugValue = () => {
    //In React, useDebugValue is a hook primarily used to provide custom labels for React DevTools.
    // It doesn’t affect the runtime behavior of your component but helps developers debug custom hooks 
    // by displaying relevant information in DevTools.

    //syntax:-  useDebugValue(value, formatFunction);

    //Use it in custom hooks to provide meaningful information for developers inspecting your components in React DevTools.

    //It’s particularly helpful for hooks that encapsulate complex logic or state.



    //By saurabh
    //It is only used in custom hooks
    //It only runs developers inspecting components in React DevTools

    //used in Rakuten component
  return (
    <h1>UseDebugValue</h1>
  )
}

export default UseDebugValue