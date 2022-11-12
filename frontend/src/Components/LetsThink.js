import React, { useEffect } from "react";

import Header from "./Header";
import BlogPost from "./BlogPost";
import Nav from "react-bootstrap/Nav";
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
  // console.log(allblogs);
  useEffect(() => {
    dispatch(getAllBlogDetails());
  }, [dispatch]);

  return (
    <div className="main_body_container">
      <div className="content-post">
        <button type="submit" className="btn_create">
          Create Post
        </button>
      </div>
      {allblogs.map((blogdetails) => (
        <div className="content-post2" key={blogdetails._id}>
          {/* <Link to={`/blogdetails/${blogdetails._id}`}>
            <p className="text-white bg-dark">{blogdetails.title}</p>
          </Link> */}
          <BlogPost key={blogdetails._id} blogData={blogdetails} />
        </div>
      ))}
    </div>
  );
};

export default LetsThink;
