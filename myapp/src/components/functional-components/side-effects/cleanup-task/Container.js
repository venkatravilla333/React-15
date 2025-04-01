import React, { useState } from 'react'
import Browser from '../runs-only-once/Browser'

function Container() {
var [display, setDisplay] =  useState(true)
  return (
    <div>
      
      {display && <Browser />}
      <button onClick={()=>setDisplay(!display)}>toggle</button>
      
      
    </div>
  )
}

export default Container