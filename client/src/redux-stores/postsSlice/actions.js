import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { ClientApi } from '../../clientApis';

const clientApi = new ClientApi();

export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
  const response = await clientApi.fetchAllPost();
  const datas = get(response, ['data', 'data'], []);
  return datas;
});

export const createNewPost = createAsyncThunk(
  'post/createNewPost',

  async (data, { getState, dispatch }) => {
    const response = await clientApi.createPostApi(data);
    const datas = get(response, ['data', 'data'], []);
    dispatch(getAllPosts());
    return datas;
  },
);

export const removePost = createAsyncThunk(
  'post/removePost',

  async (data, { getState, dispatch }) => {
    const response = await clientApi.deletePost(data);
    const datas = get(response, ['data', 'data'], []);
    dispatch(getAllPosts());
    return datas;
  },
);
