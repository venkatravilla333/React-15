import React from 'react'

function Child(props) {
  if (props.age < 18) {
    throw new Error('Age must be 18 or more')
  }
  return (
    <div>
      <h3>Age: {props.age}</h3>
    </div>
  )
}

export default Child