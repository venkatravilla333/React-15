import React, { useContext, useState } from 'react'
import { nameContext } from './A'

function H() {
 var {name} = useContext(nameContext)
  return (
    <div>
      <h3>H: {name}</h3>
    </div>
  )
}

export default H