import React from 'react'

function Child1(props) {
 console.log(props)
  return (
    <div>
      <h3>Child1</h3>
      <button onClick={()=>props.test('sachin')}>sende to parent</button>
    </div>
  )
}

export default Child1