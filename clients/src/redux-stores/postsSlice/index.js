import { createSlice, current } from '@reduxjs/toolkit';
import { set } from 'lodash';
import { createNewPost, getAllPosts } from './actions';

export const MODULE_NAME = 'postReducer';

export const counterSlice = createSlice({
  name: MODULE_NAME,
  initialState: {},
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state, action) => {
      set(state, ['getListPost', 'loading'], true);
    },
    [getAllPosts.fulfilled]: (state, action) => {
      set(state, ['getListPost', 'loading'], false);
      set(state, ['getListPost', 'data'], action.payload);
    },
    [getAllPosts.rejected]: (state, action) => {
      set(state, ['getListPost', 'loading'], true);
    },
    [createNewPost.pending]: (state, action) => {
      set(state, ['posts', 'createPost', 'loading'], true);
    },
    [createNewPost.fulfilled]: (state, action) => {
      set(state, ['posts', 'createPost', 'loading'], false);
      set(state, ['posts', 'createPost', 'success'], true);
    },
    [createNewPost.rejected]: (state, action) => {
      set(state, ['posts', 'createPost', 'loading'], false);
      set(state, ['posts', 'createPost', 'error'], false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllPost, addNewPost } = counterSlice.actions;

export default counterSlice.reducer;
