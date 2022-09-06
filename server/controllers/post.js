import { ObjectId } from "mongodb";

import { decrypt, encrypt } from "../helper/encrypt.js";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    var posts = await PostMessage.find({});
    const data =
      posts?.map((post) => {
        const dataObject = post.toObject();
        const { title, message } = dataObject;
        const identityId = encrypt(JSON.stringify(dataObject));

        return { title, message, identityId };
      }) || [];

    res.status(200).json({ data: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  try {
    const newPost = new PostMessage(post);
    await newPost.save();

    res.status(201).json({ data: newPost });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { identityId } = req.body;
    const data = decrypt(identityId);
    console.log(data);

    const dataFound = await PostMessage.findOne(data._id);

    await PostMessage.deleteOne({
      _id: dataFound._id
    });

    res.status(200).json({ message: "Delete Post Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
