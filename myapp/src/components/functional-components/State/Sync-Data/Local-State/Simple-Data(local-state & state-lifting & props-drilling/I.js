import React, { useState } from 'react'

function I(props) {
    // var [name, setName] = useState('sachin')
    
    // var updateName = () => {
    //   setName(name='kohli')
  // }
  console.log(props)
  return (
    <div>
      <h3>I: {props.name}</h3>
      {/* <button onClick={updateName}>update name</button> */}
    </div>
  )
}

export default I