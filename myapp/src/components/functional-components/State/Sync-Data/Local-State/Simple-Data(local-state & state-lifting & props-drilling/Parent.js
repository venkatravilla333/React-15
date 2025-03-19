import React, { useState } from 'react'

function Parent() {
  // var x = 0

  // var updateX = ()=>{
  //   x++
  //   console.log(x)
  // }

  var [x, setX] = useState(0)
  // console.log(x[0])
  // console.log(x[1])



  console.log('render')
  return (
    <div>
      <h3>X: {x}</h3>
      <button onClick={()=>setX(x+1)}>update x</button>
    </div>
  )
}

export default Parent