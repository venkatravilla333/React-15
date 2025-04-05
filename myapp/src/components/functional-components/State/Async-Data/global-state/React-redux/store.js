
import {applyMiddleware, createStore} from 'redux'
import { postsReducer } from './postsReducer'
import { thunk } from 'redux-thunk'



export let store = createStore(postsReducer, applyMiddleware(thunk))