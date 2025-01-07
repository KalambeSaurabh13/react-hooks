import React, { forwardRef, useImperativeHandle } from 'react'

const Child = (props, ref) => {
//use to access  the function from child to parent
//Control the Child Component: useImperativeHandle is useful when the parent needs to call specific methods in the child.

    useImperativeHandle(ref,()=>({showHi:()=>showHiHandler()}))
    const showHiHandler=()=>{
        console.log("Hellow Brother")
    }
  return (
    <div>Child </div>
  )
}

export default forwardRef(Child)