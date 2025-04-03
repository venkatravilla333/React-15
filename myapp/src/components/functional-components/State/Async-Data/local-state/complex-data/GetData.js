import axios from 'axios';
import React, { useEffect, useReducer } from 'react'



function GetData() {

  let initialState = {
    loading: false,
    posts: [],
    error: ''
  }

  let postsReducer = (state=initialState, action) => {
    switch (action.type) {
      case 'GET_POSTS_REQUEST':
        return {
          loading: true,
          posts: [],
          error: ''
        }
        break;
      case 'GET_POSTS_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload
        }
        break;
      case 'GET_POSTS_FAILURE':
        return {
          loading: false,
          posts: [],
          error: action.payload
        }
        break;
      default:
        return state
    }
  }
  let [data, dispath] = useReducer(postsReducer, initialState)

  useEffect(() => {
    console.log('effect runs')
    dispath({type: 'GET_POSTS_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispath({type: 'GET_POSTS_SUCCESS', payload: res.data})
      }).catch((err) => {
      dispath({type: 'GET_POSTS_FAILURE', payload: err.message })
    })
  }, [])
  console.log('render')
  return (
    <div>
      <h3>Get posts</h3>
      {
        data.loading ? <h3>Loading</h3> : data.error ? <h3>{data.error}</h3> :
          <div>
            {
              data.posts.map((post) => {
                return <>
                  <h3>Id: { post.id}</h3>
                  <h3>Id: { post.title}</h3>
                  <h3>Id: { post.body}</h3>
                </>
              })
            }
          </div>
      }
    </div>
  )
}

export default GetData