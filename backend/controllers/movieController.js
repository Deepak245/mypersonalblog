import { StatusCodes } from "http-status-codes";
import Movie from "../models/MovieModel.js";

const movieReview = async (req, res) => {
  const { title, content } = req.body;
  const createdMovieReview = await Movie.create({ title, content });
  createdMovieReview.save();
  res.status(StatusCodes.OK).json({
    Movietitle: title,
    MovieContent: content,
  });
};

const getAllMovieReviews = async (req, res) => {
  let result = Movie.find();
  let TotalReviewsCount = await Movie.find().count();
  const alltopics = await result;
  
  res.status(StatusCodes.OK).json({
    alltopics: alltopics,
    alltopicCount: TotalReviewsCount,
  });
};

const getSingleMovieReview = async (req, res) => {
  const { id: movieId } = req.params;
  const MovieReviewData = await Movie.findOne({ _id: movieId });
  // console.log(postData);
  res.status(StatusCodes.OK).json({
    MovieReviewData: MovieReviewData,
  });
};

const updateReviewLikes = async (req,res)=>{
  
  const action = req.params.act;
 
  
  // console.log(postData)
  if(action ==='like'){
    
    await Movie.updateOne({_id:req.params.id},{$inc:{postLiked:'1'}});
    
  }else if(action ==='dislike'){
    await Movie.updateOne({_id:req.params.id},{$inc:{postDisLiked:'1'}});
  }
  const ReviewData = await Movie.findOne({ _id: req.params.id });
  
  res.status(StatusCodes.OK).json({
    ReviewData: ReviewData,
  });
}


export { movieReview, getAllMovieReviews, getSingleMovieReview,updateReviewLikes };
