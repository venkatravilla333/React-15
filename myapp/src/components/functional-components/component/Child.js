import React, { useState } from 'react'

function Child(props) {

  console.log(props)
 var [num, setNum] = useState(0)
  return (
    <div>
      <h2>Child : {num}: {props.name}</h2>
      <button onClick={()=>setNum(num+1)}>update num</button>
    </div>
  )
}

export default Child