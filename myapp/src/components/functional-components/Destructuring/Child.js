import React from 'react'

function Child(props) {
  console.log(props)
  let {name, age} = props.data
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
    </div>
  )
}

export default Child