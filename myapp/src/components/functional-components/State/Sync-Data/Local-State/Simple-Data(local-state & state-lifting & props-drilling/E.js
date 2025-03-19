import React, { useState } from 'react'
import H from './H'
import I from './I'

function E(props) {
  //  var [name, setName] = useState('sachin')
  
  // var updateName = () => {
  //   setName(name='kohli')
  // }
  console.log(props)
  return (
    <div>
      <H name={props.name} />
      <I name={props.name} />
    </div>
  )
}

export default E