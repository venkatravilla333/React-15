import React, { useState } from 'react'
import UseCount from './UseCount'

function C() {
//  let [count3, setCount] = useState(0)

//   let increaseCount = () => {
//     setCount(count3+1)
  //   }
  let [count, increaseCount] = UseCount()
  return (
    <div> 
      <h3>Count3: {count}</h3>
      <button onDoubleClick={increaseCount}>increse count3</button>
    </div>
  )
}

export default C