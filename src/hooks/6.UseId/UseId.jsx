import React, { useId } from 'react'

const UseId = () => {
    //useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
  const id = useId();
    return (
    <>
    <h1>UseId:</h1>
    <p>useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.</p>
    <form >
        <label htmlFor={id +"userName" }>UserName</label>
        <input type="text" id={id +"userName" } />
        <label htmlFor={id+"password"}>Passowrd</label>
        <input type="password"  id={id+"password"}  />
        <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default UseId