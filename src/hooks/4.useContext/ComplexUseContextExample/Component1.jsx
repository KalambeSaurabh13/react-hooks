import React, { useState } from 'react'
import Component2 from './Component2'
import Component3 from './Component3'
import { counterContext,greaterContext } from './context/context'

const Component1 = () => {
    const [count, setCount] = useState(5)
    const [count1, setCount1] = useState(0)

  return (
    <div>
        <greaterContext.Provider value={{count1,setCount1}}>
        <counterContext.Provider value={{count,setCount}}>
        Component1
        <Component2 />
        <Component3/>      
        </counterContext.Provider>
        </greaterContext.Provider>
    </div>
  )
}

export default Component1