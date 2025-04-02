import React from 'react'

function Login(props) {
  return (
    <div>
      <h3>Login</h3>
      <input type="text" />
      <input type="text" />
      <button onClick={()=>props.setIsLogin(true)}>Login</button>
    </div>
  )
}

export default Login