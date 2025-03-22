import React, { useContext, useState } from 'react'

import { nameContext, ageContext } from './A'

function L() {
  // var name = nameContext._currentValue
  var name = useContext(nameContext)
  var age = useContext(ageContext)
  return (
    <div>
      <h3>L: {name}</h3>
      <h3>L: {age}</h3>
    </div>
  )
}

export default L