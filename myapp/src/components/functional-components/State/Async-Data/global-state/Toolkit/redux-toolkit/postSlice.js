import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let fectPosts = createAsyncThunk('posts', async() => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
})


let initialState = {
  loading: false,
  posts: [],
  error: ''
}

let postsReducer = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fectPosts.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fectPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
    });
    builder.addCase(fectPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})

export default postsReducer.reducer 