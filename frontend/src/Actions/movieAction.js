import {
  ALL_MOVIEDETAILS_REQUEST,
  ALL_MOVIEDETAILS_SUCCESS,
  SINGLE_MOVIE_DETAILS_REQUEST,
  SINGLE_MOVIE_DETAILS_SUCCESS,
  UPDATE_MOVIE_LIKE_REQUEST,
  UPDATE_MOVIE_LIKE_SUCCESS,
  CREATE_MOVIE_DETAILS_SUCCESS
} from "../Constants/MovieConstants";
import axios from "axios";

export const createReview =(reviewData)=>async(dispatch)=>{
  try {
    console.log(reviewData)
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const {data} = await axios.post("/api/v1/movie/moviereview",reviewData,config)
    dispatch({
      type:CREATE_MOVIE_DETAILS_SUCCESS,
      payload:data
    })
  } catch (error) {
    console.log(error);
  }
}

export const getAllMovieReviewDetails = () => async (dispatch) => {
  try {
    // console.log("inAction");
    dispatch({ type: ALL_MOVIEDETAILS_REQUEST });
    const { data } = await axios.get("/api/v1/movie/reviewdetails");
    // console.log(data);
    dispatch({ type: ALL_MOVIEDETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleReviewDetails = (id) => async (dispatch) => {
  // console.log(id);
  try {
    dispatch({ type: SINGLE_MOVIE_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/movie/reviewdetails/${id}`);
    // console.log(data);
    dispatch({ type: SINGLE_MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateReviewLikesCount = (id,action) => async (dispatch) => {
  // console.log(id);
  // console.log(action);
  try {
    dispatch({ type: UPDATE_MOVIE_LIKE_REQUEST });
    const { data } = await axios.post(`/api/v1/movie/reviewlikes/${id}/${action}`);
    // console.log(data);
    dispatch({ type: UPDATE_MOVIE_LIKE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};