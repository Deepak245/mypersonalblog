import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import "express-async-errors"

// routers import
import authRouter from "./backend/routes/authRoutes.js";
import postRouter from "./backend/routes/postRoutes.js";
import movieRouter from "./backend/routes/movieRoutes.js"

// Error Import
import "express-async-errors"
import errorHandlerMiddleWare from "./backend/middleWare/error-handler.js";


import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitizer from "express-mongo-sanitize";

// dotEnv.config();
dotEnv.config({path:"backend/.env"})      // comment it before going to prod
const app = express();

// un comment it before going to prod
const __dirname = dirname(fileURLToPath(import.meta.url))


if(process.env.ENV === "PROD"){
  // app.use(express.static(path.resolve(__dirname,"../frontend/build")));
app.use(express.static(path.resolve(__dirname,"./frontend/build")));


}







app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(xss());
app.use(mongoSanitizer());

// app.get("/",(req,res)=>{
//   throw new Error("error");
// })

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/movie", movieRouter);


if(process.env.ENV === "PROD"){
// un comment it before going to prod.
app.get("/*", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"../frontend/build","index.html"))
  res.sendFile(path.resolve(__dirname,"./frontend/build","index.html"))
 });
}


app.use(errorHandlerMiddleWare);
const port = process.env.PORT || 5000 ;
// console.log(process.env.MONGO_URL)
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
