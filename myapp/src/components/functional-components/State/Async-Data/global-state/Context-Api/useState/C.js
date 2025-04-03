import React, { useContext } from 'react'
import { dataContext } from './GetData'

function C() {
var {loading, posts, error} = useContext(dataContext)
  return (
    <div>
      <h3>Com: C</h3>
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

export default C