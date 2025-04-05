import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fectPosts } from '../redux-toolkit/postSlice'


function L() {
  let dispatch = useDispatch()

  let data = useSelector((state) => {
    return state.postsReducer
  })
  

  console.log(data)

  useEffect(() => {
    console.log('effect runs')
   dispatch(fectPosts())
  }, [])

  return (
    <div>
      <h2>Posts</h2>
      {
        data.loading ? <h3>Loading</h3> : data.errror ? <h3>{data.error}</h3> :
          <div>
            {
              data.posts.map((post) => {
                return <div>
                  <h4>Id: {post.id}</h4>
                  <h4>Title: {post.title}</h4>
                  <h4>Body {post.body}</h4>
                </div>
              })
            }
          </div>
      }
    </div>
  )
}

export default L