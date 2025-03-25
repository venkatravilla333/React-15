
import React, { useReducer, useState } from 'react'

function Cake() {

  let initialState = {
    noOfCakes: 100
  }

  let cakeReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'BUY_CAKE':
        return { noOfCakes: state.noOfCakes - 1 }
        break;
      default:
        return state
    }
  }
 var [cake, dispatch] = useReducer(cakeReducer, initialState)
  return (
    <div>
      <h3>No of cakes: {cake.noOfCakes}</h3>
      <button onClick={()=>dispatch({type: 'BUY_CAKE'})}>buycake</button>
    </div>
  )
}

export default Cake