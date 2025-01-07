import React, { useRef } from 'react'
import Child from './Child'


const Parent = () => {
    const ref = useRef();
  return (
    <div>
      <h1>useImperativeHandle</h1>
        <button onClick={()=>ref.current.showHi()} >Show</button>
        <Child ref={ref} />
    </div>
  )
}

export default Parent