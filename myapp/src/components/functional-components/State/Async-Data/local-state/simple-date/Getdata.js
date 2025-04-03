import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Getposts() {

 let [loading, setLoading] = useState(false)
 let [posts, setPosts] = useState([])
  let [error, setError] = useState(false)
  
  // useEffect(() => {
  //   console.log('effect runs')
  //   setLoading(true)
  //   setError(false)
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //     console.log(res)
  //       console.log(res.data)
  //       setPosts(res.data)
  //       setLoading(false)
  //     }).catch((err) => {
  //       console.log(err)
  //       setError(err.message)
  //       setLoading(false)
  //    })
  // }, [])

  let getData = () => {
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
  }
  
  console.log('render')
  return (
    <div>
      <h3>Get posts</h3>
      <button onClick={getData}>get post</button>
      {
        loading ? <h3>Loading</h3> : error ? <h3>{error}</h3> : 
          <div>
            {
              posts.map((post) => {
                return <div>
                  <h3>Id: {post.id}</h3>
                  <h3>Title: {post.title}</h3>
                  <h3>Body: {post.body}</h3>
                </div>
              })
             
              
            }
          </div>
      }

    </div>
  )
}

export default Getposts