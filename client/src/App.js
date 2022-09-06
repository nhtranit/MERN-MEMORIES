import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import ListPosts from './features/Posts';
import PostFormSubmit from './features/Posts/PostForm/index';

const App = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h2">
        List of todo list
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListPosts />
        </Grid>
        <Grid item xs={4}>
          <PostFormSubmit />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
