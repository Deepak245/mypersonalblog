import { Card,Link } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";

const BlogPost = (blogData) => {
  // console.log(blogData);
  return (
    <>
      
      
      <Link href={`/blogdetails/${blogData.blogData._id}`} underline="none" color="#fff">
        {blogData.blogData.title}
      </Link>
    </>
  );
};

export default BlogPost;
