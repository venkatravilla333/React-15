import React from 'react'
import F from './F'
import G from './G'

function C(props) {
  console.log(props)
  return (
    <div>
      <F/>
      <G name={props.name} />
    </div>
  )
}

export default C