import React, { useContext } from 'react'
import { counterContext, greaterContext } from './context/context'

const Component2 = () => {
    const value = useContext(counterContext)
    const value1 = useContext(greaterContext)

  return (
    <div>Component2
        <button onClick={()=>value.setCount(value.count+1)} >
            button
        </button>
        <button onClick={()=>value1.setCount1(value1.count1+1)} >
            greater button
        </button>
    </div>
  )
}

export default Component2