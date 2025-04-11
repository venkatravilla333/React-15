import React, { useState } from 'react'
import Child from './Child'

function Parent() {
 var [data, setData] = useState({name: 'sachin', age: 40})

  // let { name, age } = data
  
  return (
    <div>
      {/* <h2>Name: {name}</h2>
      <h2>Age: {age}</h2> */}
      <Child data={data} />
    </div>
  )
}

export default Parent