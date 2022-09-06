import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../redux-stores/postsSlice/actions';
import { getListPost } from '../../redux-stores/postsSlice/selector';
import { PostItem } from './PostItem';

const ListPosts = () => {
  const posts = useSelector(getListPost) || [];
  const dispatch = useDispatch<any>();

  useEffect(() => {
    console.log('get Post data');
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {posts?.map((item: any, index: any) => {
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
