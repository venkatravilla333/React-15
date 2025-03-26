import React, { useContext, useState } from 'react'

import { nameContext, ageContext } from './A'

function L() {
  // var name = nameContext._currentValue
  var {name, setName } = useContext(nameContext)
  var {age, setAge} = useContext(ageContext)
  return (
    <div>
      <h3>L: {name}</h3>
      <h3>L: {age}</h3>
      <button onClick={()=>setName('dhoni')}>update name</button>
    </div>
  )
}

export default L