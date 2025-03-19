import React from 'react'
import L from './L'

function K(props) {
  console.log(props)
  return (
    <div>
      <L name={props.name} />
    </div>
  )
}

export default K