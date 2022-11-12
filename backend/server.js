import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();
dotenv.config({path:"backend/config.env"}); 
const app = express();

// routers import

import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRoutes.js";

app.get("/", (req, res) => {
  res.send("Server Spinned up....");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);

// if(process.env.NODE_ENV==='PRODUCTION'){
//     app.use(express.static(path.join(__dirname,'../')))
// }
const port = process.env.PORT;

const start = async () => {
  try {
    // console.log(process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`connected to db & server listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// password for mogodb in quickaccess:padmavathi
// connecting string:-               mongodb+srv://Deepak:<padmavathi>@basecluster.hhtiouj.mongodb.net/?retryWrites=true&w=majority
