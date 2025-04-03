
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import A from './A'

export let dataContext = React.createContext()

function GetData() {

   let [loading, setLoading] = useState(false)
   let [posts, setPosts] = useState([])
    let [error, setError] = useState(false)
  
   useEffect(() => {
    console.log('effect runs')
    setLoading(true)
    setError(false)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      console.log(res)
        console.log(res.data)
        setPosts(res.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setError(err.message)
        setLoading(false)
     })
  }, [])
  return (
    <div>
      <dataContext.Provider value={{loading, posts, error}}>
      <A/>
      </dataContext.Provider>
    </div>
  )
}

export default GetData