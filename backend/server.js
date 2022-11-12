import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
dotEnv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname,"../frontend/build")));


// routers import
import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRoutes.js";


// app.get("/", (req, res) => {
//   res.send("Server Spinned up....");
// });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,"../frontend/build","index.html"))
 });
// if(process.env.NODE_ENV==='PRODUCTION'){
    // app.use(express.static(module.join(__dirname,'../frontend/build')))

    // app.get('*',(req,res)=>{
    //   res.send(module.resolve(__dirname,'../frontend/build/index.html'))
    // })
// }

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
