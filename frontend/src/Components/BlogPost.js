import React from "react";
import { Link } from "react-router-dom";

const BlogPost = (blogData) => {
  // console.log(blogData);
  return (
    <div>
      {/* {blogData.blogData.title} */}
      <Link to={`/blogdetails/${blogData.blogData._id}`}>
        <p className="text-white bg-dark">{blogData.blogData.title}</p>
      </Link>
    </div>
  );
};

export default BlogPost;
