import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  noOfCurds: 50
}

let curdSlice = createSlice({
  name: 'curd',
  initialState: initialState,
  reducers: {
    buyCurd: (state) => {
      state.noOfCurds -= 1
    }
  }
})

export default curdSlice.reducer

export let {buyCurd} = curdSlice.actions