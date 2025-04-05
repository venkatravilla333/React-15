import axios from "axios"
import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./actionTypes"


let fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  }
}

let fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }
}

let fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  }
}

export let fetchPosts = () => {
  return (dispath) => {
    dispath(fetchPostRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispath(fetchPostSuccess(res.data))
      }).catch((err) => {
      dispath(fetchPostFailure(err.message))
    })
  }
}