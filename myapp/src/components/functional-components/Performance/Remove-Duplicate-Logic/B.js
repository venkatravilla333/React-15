import React, { useState } from 'react'
import UseCount from './UseCount'

function B() {
  // let [count2, setCount] = useState(0)

  // let increaseCount = () => {
  //   setCount(count2+1)
  // }
  let [count, increaseCount] = UseCount()
  
  return (
    <div>
      <h3>Count2: {count}</h3>
      <button onMouseOver={increaseCount}>increse count2</button>
    </div>
  )
}

export default B