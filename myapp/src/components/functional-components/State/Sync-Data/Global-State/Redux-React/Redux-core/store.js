
import { combineReducers, createStore } from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'

let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})

export let store = createStore(rootReducer)
console.log(store)