import {
  ALL_BLOGDETAILS_REQUEST,
  ALL_BLOGDETAILS_SUCCESS,
  SINGLE_POST_DETAILS_REQUEST,
  SINGLE_POST_DETAILS_SUCCESS,
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
