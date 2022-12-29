import { StatusCodes } from "http-status-codes";
import Post from "../models/PostModel.js";

const postTopic = async (req, res) => {
  const { title, content } = req.body;
  const createdPost = await Post.create({ title, content });
  createdPost.save();
  res.status(StatusCodes.OK).json({
    Posttitle: title,
    PostContent: content,
  });
};

const getAllBlogPost = async (req, res) => {
  let result = Post.find();
  let TotalDocumentsCount = await Post.find().count();
  const alltopics = await result;
  
  res.status(StatusCodes.OK).json({
    alltopics: alltopics,
    alltopicCount: TotalDocumentsCount,
  });
};

const getSinglePost = async (req, res) => {
  const { id: postId } = req.params;
  const postData = await Post.findOne({ _id: postId });
  // console.log(postData);
  res.status(StatusCodes.OK).json({
    postData: postData,
  });
};

const updatePostLikes = async (req,res)=>{
  
  const action = req.params.act;
 
  
  // console.log(postData)
  if(action ==='like'){
    
    await Post.updateOne({_id:req.params.id},{$inc:{postLiked:'1'}});
    
  }else if(action ==='dislike'){
    await Post.updateOne({_id:req.params.id},{$inc:{postDisLiked:'1'}});
  }
  const postData = await Post.findOne({ _id: req.params.id });
  
  res.status(StatusCodes.OK).json({
    postData: postData,
  });
}


export { postTopic, getAllBlogPost, getSinglePost,updatePostLikes };
