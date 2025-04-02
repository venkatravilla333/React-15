import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {
 let [isLogin, setIsLogin] = useState(false)
  
  // if (isLogin) {
  //   return <Profile setIsLogin={setIsLogin} />
  // } else {
  //   return <div>
  //     <Login  setIsLogin={setIsLogin} />
  //   </div> 
  // }
  
//   var data 
  
//    if (isLogin) {
//     data = <Profile setIsLogin={setIsLogin} />
//   } else {
//    data = <Login  setIsLogin={setIsLogin} />
//          
//   }
//   return data

// return isLogin ?  <Profile setIsLogin={setIsLogin} /> : <Login  setIsLogin={setIsLogin} />
// }

return isLogin &&  <Profile setIsLogin={setIsLogin} /> 
}

export default Parent