import React, { useEffect, useState } from 'react'

function Parent() {
 var [normalCount, setNormalCount] = useState(0)
  var [domCount, setDomCount] = useState(0)
  

  let updateNormalCount = () => {
    setNormalCount(normalCount+1)
  }
  let  updateDomCount = () => {
    setDomCount(domCount+1)
  }
  
  useEffect(() => {
    console.log('effect runs')
    document.title = domCount
  })

  console.log('render')
  return (
    <div>
      <h3>Normal count: {normalCount}</h3>
      <button onClick={updateNormalCount}>update normal count</button>
      <h3>Dom count: {domCount}</h3>
      <button onClick={updateDomCount}>update dom count</button>
    </div>
  )
}

export default Parent