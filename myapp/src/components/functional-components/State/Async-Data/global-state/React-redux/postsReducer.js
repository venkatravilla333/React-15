import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./actionTypes"

let initialState = {
  loading: false,
  posts: [],
  error: ''
}


export let postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        loading: true,
        posts: [],
        error: ''
      }
      break;
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
      break;
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      break;
    default:
      return state
  }
}