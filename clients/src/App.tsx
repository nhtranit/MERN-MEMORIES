import React from "react";

import "./App.css";
import { Container, Typography, Grid } from "@mui/material";
import ListPosts from "./features/Posts";
import PostFormSubmit from "./features/Posts/PostForm";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
