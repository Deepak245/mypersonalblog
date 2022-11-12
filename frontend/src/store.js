import {
  legacy_createStore as createstore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  letsThinkDetailsReducer,
  getPostDetailsReducer,
} from "./Reducers/letsThinkReducer";

const reducer = combineReducers({
  postDetails: letsThinkDetailsReducer,
  singlePostDetails: getPostDetailsReducer,
});
const middleWare = [thunk];

const intitalState = {};
const store = createstore(
  reducer,
  intitalState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
