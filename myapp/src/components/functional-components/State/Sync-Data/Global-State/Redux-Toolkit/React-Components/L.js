import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux-core/cake/cakeAction'
import { buyCurd } from '../Redux-core/curd/curdAction'


function L() {
  // var x = store.getState()
 var noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
 })
 var noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
 })
  
  var dispatch = useDispatch()

  return (
    <div>
      <h3>No of cakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>buyCake</button>
      <h3>No of cakes: {noOfCurds}</h3>
      <button onClick={()=>dispatch(buyCurd())}>buyCake</button>
    </div>
  )
}

export default L