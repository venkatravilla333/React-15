import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function H() {
 var noOfCakes =  useSelector((state) => {
     return state.cake.noOfCakes
   })
  return (
    <div>
      <h3>H: no of cakes {noOfCakes}</h3>
    </div>
  )
}

export default H