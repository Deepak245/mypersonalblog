import React, { Fragment, useEffect } from "react";

import Header from "./Header";
import BlogPost from "./BlogPost";
import CustomeScrollBar from "./CustomeScrollBar";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogDetails } from "../Actions/letsThinkAction";

import { Link } from "react-router-dom";

const LetsThink = () => {
  // console.log("In Lets think page");

  const dispatch = useDispatch();

  const { loading, allblogs, alltopicCount } = useSelector(
    (state) => state.postDetails
  );
  // console.log(state.postDetails);
  console.log(loading);
  useEffect(() => {
    dispatch(getAllBlogDetails());
  }, [dispatch]);

  return (
    <div className="main_body_container scrollveritcal">
      
      <div className="content-post">
        <button type="submit" className="btn_create">
          Create Post
        </button>
      </div>
      {loading?<Fragment><Loader/></Fragment>:<Fragment>
      {allblogs.map((blogdetails) => (
        <div className="content-post2" key={blogdetails._id}>
        
          
          <BlogPost key={blogdetails._id} blogData={blogdetails} />
         
          
        </div>
      ))}
        </Fragment>}
      
      
    </div>
  );
};

export default LetsThink;
