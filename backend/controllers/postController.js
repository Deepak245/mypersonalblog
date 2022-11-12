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

export { postTopic, getAllBlogPost, getSinglePost };
