import React, { useState } from 'react'
import Child from './Child'

function Parent() {
// var [name, setName] = useState('sachin')
  return (
    <div>
      <h4>Name: {}</h4>
      <button >update name</button>
      <Child name = "sachin"/>
      <Child name = "dhoni"/>
      <Child name = "sami"/>
    </div>
  )
}

export default Parent