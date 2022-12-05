import {
  ALL_BLOGDETAILS_REQUEST,
  ALL_BLOGDETAILS_SUCCESS,
  SINGLE_POST_DETAILS_REQUEST,
  SINGLE_POST_DETAILS_SUCCESS,
  UPDATE_POST_LIKE_REQUEST,
  UPDATE_POST_LIKE_SUCCESS
} from "../Constants/letsThinkConstants";
import axios from "axios";

export const getAllBlogDetails = () => async (dispatch) => {
  try {
    // console.log("inAction");
    dispatch({ type: ALL_BLOGDETAILS_REQUEST });
    const { data } = await axios.get("/api/v1/post/blogdetails");
    // console.log(data);
    dispatch({ type: ALL_BLOGDETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  // console.log(id);
  try {
    dispatch({ type: SINGLE_POST_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/post/blogdetails/${id}`);
    // console.log(data);
    dispatch({ type: SINGLE_POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateLikesCount = (id,action) => async (dispatch) => {
  // console.log(id);
  // console.log(action);
  try {
    dispatch({ type: UPDATE_POST_LIKE_REQUEST });
    const { data } = await axios.post(`/api/v1/post/blogdetails/${id}/${action}`);
    // console.log(data);
    dispatch({ type: UPDATE_POST_LIKE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};