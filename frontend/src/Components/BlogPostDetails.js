import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../Actions/letsThinkAction";
import Header from "./Header";
import Loader from "./Loader";

// const BlogPostDetails = () => {
//   const { id } = useParams();
//   console.log(id);
//   const dispatch = useDispatch();
//   const { loading, postdata } = useSelector((state) => state.singlePostDetails);
//   console.log(postdata);
//   console.log(loading);

//   useEffect(() => {
//     dispatch(getPostDetails(id));
//   }, [id]);
//   return (
//     // <Header />
//     <div className="main_body_container">
//       <Header />

//       {/* <div className="content-post">
//             <div className="content-post2">{singlepostdata._id}</div>
//           </div> */}
//       {postdata.title}
//     </div>
//   );
// };

// export default BlogPostDetails;

const BlogPostDetails = () => {
  // console.log(props);
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const { loading, postData } = useSelector((state) => state.singlePostDetails);
  // console.log(postData);
  useEffect(() => {
    // console.log(id);
    dispatch(getPostDetails(id));
  }, [id]);

  return (
    <div>
      <div className="main_body_container">
        <div className="content-post">
          <div className="content-post2">{postData.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetails;
