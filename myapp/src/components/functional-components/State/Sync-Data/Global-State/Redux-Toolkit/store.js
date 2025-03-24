
import {configureStore} from '@reduxjs/toolkit'

export let store = configureStore({
  reducer: {
    cake: cakeReducer,
    curd: curdReducer
  }
})