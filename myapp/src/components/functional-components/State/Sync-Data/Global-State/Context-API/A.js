import React, { useState } from 'react'
import B from './B'
import C from './C'

export var nameContext = React.createContext()
export var ageContext = React.createContext()

function A() {
  var [name, setName] = useState('sachin')
  var [age, setAge] = useState(40)
  return (
    <div>
      <ageContext.Provider value={{ age, setAge }}>
        <nameContext.Provider value={{ name, setName }}>
         <B />
        <C />
        {/* <button onClick={()=>setName('kohli')}>update name</button>
        <button onClick={()=>setAge(35)}>update age</button> */}
     </nameContext.Provider>
      </ageContext.Provider>
     
    </div>
  )
}

export default A