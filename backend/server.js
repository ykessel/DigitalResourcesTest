import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { createUserRoute } from "./routes/user.route.js";
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://admin:0881Digital!@interviewtest.bnk5t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
app.use(json());
app.use("/users", createUserRoute);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      console.log("Connected to the database: ", process.env.MONGO_URI)
    )
    .catch((err) => console.error("Mongoose Error: ", err));

  console.log(`Server is running on port: ${port}`);
});
