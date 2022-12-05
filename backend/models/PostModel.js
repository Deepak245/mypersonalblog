import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Provide Title to Post"],
        trim:true
    },
    content:{
        type:String,
        required:[true,"Provide Content to Post"],
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

// PostSchema.pre("save");

export default mongoose.model("PostModel",PostSchema);