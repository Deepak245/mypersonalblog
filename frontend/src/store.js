import {
  legacy_createStore as createstore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {loginReducer} from "./Reducers/authReducer"

import {
  letsThinkDetailsReducer,
  getPostDetailsReducer,
  updateLikesReducer
} from "./Reducers/letsThinkReducer";

import {movieReviewsReducer,getMovieReviewDetailsReducer,updateReviewLikesReducer} from "./Reducers/movieReducer"

const reducer = combineReducers({
  postDetails: letsThinkDetailsReducer,
  singlePostDetails: getPostDetailsReducer,
  likesDetails:updateLikesReducer,
  reviewDetails:movieReviewsReducer,
  singleReviewDetails:getMovieReviewDetailsReducer,
  reviewLikeDetails:updateReviewLikesReducer,
  loginDetails:loginReducer
});
const middleWare = [thunk];

// const intitalState = {user:localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): {}};
const intitalState ={}
const store = createstore(
  reducer,
  intitalState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
