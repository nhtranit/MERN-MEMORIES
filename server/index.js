import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// routes
import postRoutes from "./routes/post.js ";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/post", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://nhtranit:nhtranit11010@cluster0.zffov9r.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`App running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
// mongoose.set('useFindAndModify', false);
