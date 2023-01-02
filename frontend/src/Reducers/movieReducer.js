import {
  ALL_MOVIEDETAILS_REQUEST,
  ALL_MOVIEDETAILS_SUCCESS,
  SINGLE_MOVIE_DETAILS_REQUEST,
  SINGLE_MOVIE_DETAILS_SUCCESS,
  UPDATE_MOVIE_LIKE_REQUEST,
  UPDATE_MOVIE_LIKE_SUCCESS,
  CREATE_MOVIE_DETAILS_SUCCESS
} from "../Constants/MovieConstants";

export const movieReviewsReducer = (state = { allmoviereviews: [] }, action) => {
  switch (action.type) {
    case ALL_MOVIEDETAILS_REQUEST:
      return {
        loading: true,
        allmoviereviews: [],
      };
    case ALL_MOVIEDETAILS_SUCCESS:
      // console.log(action.payload.alltopics);
      return {
        ...state,
        loading: false,
        allmoviereviews: action.payload.alltopics,
        allmoviereviewsCount: action.payload.alltopicCount,
      };
    case CREATE_MOVIE_DETAILS_SUCCESS:
      return {createdReview:action.payload}
    default:
      return state;
  }
};

export const getMovieReviewDetailsReducer = (state = { reviewData: {} }, action) => {
  switch (action.type) {
    case SINGLE_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_MOVIE_DETAILS_SUCCESS:
      // console.log(action);
      // console.log(action.payload.postData);
      return {
        ...state,
        loading: false,
        reviewData: action.payload.MovieReviewData,
      };
    default:
      return state;
  }
};

export const updateReviewLikesReducer = (state={likesReviewData:{}},action)=>{
  switch (action.type){
    case UPDATE_MOVIE_LIKE_REQUEST:
      return {
        ...state,
        updating:true
      }
    case UPDATE_MOVIE_LIKE_SUCCESS:
      // console.log(action)
      return {
        ...state,
        updating:false,
        likesReviewData:action.payload.ReviewData

      }
    default:
      return state;
  }
}

