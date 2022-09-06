import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from './../../redux-stores/postsSlice/actions';
import PostItem from './PostItem/index.js';
import { getListPost } from '../../redux-stores/postsSlice/selector';
import { get } from 'lodash';
import { MODULE_NAME } from '../../redux-stores/postsSlice';

const ListPosts = () => {
  const posts = useSelector(getListPost) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('get Post data');
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {posts?.map((item, index) => {
        return (
          <Grid item key={`${item}-${index}`} xs={6}>
            <PostItem data={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListPosts;
