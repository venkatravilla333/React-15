import React, { useReducer, useEffect } from 'react'
import A from './A'
import axios from 'axios'

export let dataContext = React.createContext()

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
  var [data, dispatch] =  useReducer(postsReducer, initialState)

  useEffect(() => {
    console.log('effect runs')
    dispatch({type: 'GET_POSTS_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispatch({type: 'GET_POSTS_SUCCESS', payload: res.data})
      }).catch((err) => {
      dispatch({type: 'GET_POSTS_FAILURE', payload: err.message })
    })
  }, [])
  return (
    <div>
      <dataContext.Provider value={data}>
      <A/>
      </dataContext.Provider>
    </div>
  )
}

export default GetData