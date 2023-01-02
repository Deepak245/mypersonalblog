import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Provide Title of Movie"],
        trim:true
    },
    content:{
        type:String,
        required:[true,"Provide Content to Movie Review"],
        trim:true
    },
    postLiked:{
        type:Number,
        trim:true,
        default:0
    },
    postDisLiked:{
        type:Number,
        trim:true,
        default:0
    },
    reviews:[{
        comment:{
            type:String
        }
    }],
    createdAt:{type:Date}
},{timestamps:true});



export default mongoose.model("MovieModel",MovieSchema);