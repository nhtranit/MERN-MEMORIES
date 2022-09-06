import React, { useReducer } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../../redux-stores/postsSlice/actions";

const PostFormSubmit = (props: any) => {
  const dispatch = useDispatch<any>();
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      title: "",
      message: ""
    }
  );

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    console.log("Submit Data ", formInput);
    dispatch(createNewPost(formInput));
  };

  const handleChange = (evt: { target: { name: any; value: any } }) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div>
      <Container>
        <Typography variant="h5" component="h3">
          Create Form
        </Typography>
        <Typography component="p">Add New Post</Typography>

        <form>
          <TextField
            label="Title"
            name="title"
            defaultValue={formInput.email}
            helperText="Enter title"
            onChange={handleChange}
          />
          <TextField
            label="Message"
            name="message"
            defaultValue={formInput.name}
            helperText="e.g. Lorem message"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default PostFormSubmit;
