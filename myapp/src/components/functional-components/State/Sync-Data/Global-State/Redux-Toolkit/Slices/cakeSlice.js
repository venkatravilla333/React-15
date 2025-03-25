import { createSlice } from "@reduxjs/toolkit";



let initialState = {
  noOfCakes: 100
}

let cakeSlice = createSlice({
  name: 'cake',
  initialState: initialState,
  reducers: {
    buyCake: (state) => {
       state.noOfCakes -= 1
    }
  }
})

export default cakeSlice.reducer

export let {buyCake} = cakeSlice.actions