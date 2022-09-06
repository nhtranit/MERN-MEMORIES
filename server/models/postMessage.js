import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String
});

const PostMessage = mongoose.model("PostMesssage", postSchema);

export default PostMessage;
