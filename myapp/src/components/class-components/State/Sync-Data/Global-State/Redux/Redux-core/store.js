
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'
import logger from 'redux-logger'

let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
// console.log(store)