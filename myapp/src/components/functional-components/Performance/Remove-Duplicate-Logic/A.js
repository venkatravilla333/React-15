import React, { useState } from 'react'
import UseCount from './UseCount'

function A() {
//  let [count, setCount] = useState(0)

//   let increaseCount = () => {
//     setCount(count+1)
  //   }
  let [count, increaseCount] = UseCount()
  return (
    <div> 
      <h3>Count1: {count}</h3>
      <button onClick={increaseCount}>increse count1</button>
    </div>
  )
}

export default A