import React, { useContext } from 'react'
import { counterContext, greaterContext } from './context/context'


const Component4 = () => {
    const counter = useContext(counterContext)
    const greater = useContext(greaterContext)

  return (
    <div>Display Count{counter.count}
    Display Count{greater.count1}
    </div>
  )
}

export default Component4