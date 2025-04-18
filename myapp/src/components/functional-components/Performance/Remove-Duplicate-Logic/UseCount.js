import React, { useState } from 'react'

function UseCount() {
  let [count, setCount] = useState(0)

  let increaseCount = () => {
    setCount(count+1)
  }
  return [count, increaseCount]
}

export default UseCount