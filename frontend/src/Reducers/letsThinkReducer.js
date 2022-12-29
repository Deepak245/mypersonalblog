import {
  ALL_BLOGDETAILS_REQUEST,
  ALL_BLOGDETAILS_SUCCESS,
  SINGLE_POST_DETAILS_REQUEST,
  SINGLE_POST_DETAILS_SUCCESS,
  UPDATE_POST_LIKE_REQUEST,
  UPDATE_POST_LIKE_SUCCESS,
  CREATE_POST_DETAILS_SUCCESS
} from "../Constants/letsThinkConstants";

export const letsThinkDetailsReducer = (state = { allblogs: [] }, action) => {
  switch (action.type) {
    case ALL_BLOGDETAILS_REQUEST:
      return {
        loading: true,
        allblogs: [],
      };
    case ALL_BLOGDETAILS_SUCCESS:
      // console.log(action.payload.alltopics);
      return {
        ...state,
        loading: false,
        allblogs: action.payload.alltopics,
        alltopicCount: action.payload.alltopicCount,
      };
    case CREATE_POST_DETAILS_SUCCESS:
      return {createdPost:action.payload}
    default:
      return state;
  }
};

export const getPostDetailsReducer = (state = { postData: {} }, action) => {
  switch (action.type) {
    case SINGLE_POST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_POST_DETAILS_SUCCESS:
      // console.log(action);
      // console.log(action.payload.postData);
      return {
        ...state,
        loading: false,
        postData: action.payload.postData,
      };
    default:
      return state;
  }
};

export const updateLikesReducer = (state={likesPostData:{}},action)=>{
  switch (action.type){
    case UPDATE_POST_LIKE_REQUEST:
      return {
        ...state,
        updating:true
      }
    case UPDATE_POST_LIKE_SUCCESS:
      // console.log(action)
      return {
        ...state,
        updating:false,
        likesPostData:action.payload.postData

      }
    default:
      return state;
  }
}

