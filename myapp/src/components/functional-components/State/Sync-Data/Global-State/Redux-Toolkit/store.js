// import { combineReducers, creatStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from './Slices/cakeSlice'
import curdReducer from './Slices/curdSlice'

// var rootReducer = combineReducers({
//   cake: cakeReducer,
//   curd: curdReducer
// })

// var store = creatStore(rootReducer

export let store = configureStore({
  reducer: {
    cake: cakeReducer,
    curd: curdReducer
  }
})