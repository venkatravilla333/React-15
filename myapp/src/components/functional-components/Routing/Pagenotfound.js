import React, { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function Pagenotfound() {

  let navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  })

  return (
    <h3>404 Pagenotfound</h3>
    // <Navigate to='/'/>
  )
}

export default Pagenotfound