import React, { useState } from 'react'

function H(props) {
  // var [name, setName] = useState('sachin')
  
  // var updateName = () => {
  //   setName(name='kohli')
  // }
  console.log(props)
  return (
    <div>
      <h3>H: {props.name}</h3>
      {/* <button onClick={updateName}>update name</button> */}
    </div>
  )
}

export default H