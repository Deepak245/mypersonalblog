import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails,updateLikesCount } from "../Actions/letsThinkAction";
import {GrLike,GrDislike} from "react-icons/gr"
import Header from "./Header";
import Loader from "./Loader";
import CustomeScrollBar from "./CustomeScrollBar";

import {Card, CardActionArea, CardContent, Grid,Typography  } from "@mui/material";
import {useStylesBlogDetailsPage} from "../WrapperStyles/BlogDetailStyle";

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
  const designCard = useStylesBlogDetailsPage();
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const { loading, postData } = useSelector((state) => state.singlePostDetails);
  const {likesPostData} = useSelector((state)=>state.likesDetails);
  // console.log(postData);
  // console.log(likesPostData);
  useEffect(() => {
    // console.log(id);
    dispatch(getPostDetails(id));
  }, [id]);
  const onHandleIncreaseLike =(id)=>{
    dispatch(updateLikesCount(id,'like'));
  }
  const onHandleIncreaseDislike =(id)=>{
    dispatch(updateLikesCount(id,'dislike'));
  }
  return (
    <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
      
        <Card >
          <CardContent>
          <Typography align="center" color="common.black" gutterBottom>
            <strong>
           {postData.title}
            
            </strong>
            
            
           
            
          </Typography>
          <Typography alignContent={"center"} className={designCard.contentFontFamily}>
          {postData.content}
          </Typography>
          </CardContent>
        
        </Card>
      
    </Grid>
    
    //   {/* <div className="main_body_container scrollveritcal scrollhorizantal">
    //     <div>
        
    //     <button className="like" onClick={()=>onHandleIncreaseLike(id)}><i className="fa fa-thumbs-o-up"></i>  
    //     Like <span className="qty1" name="qty1"  type="text" value="0">{Object.keys(likesPostData).length === 0?postData.postLiked:likesPostData.postLiked}</span>
    // </button>
    // <button className="dislike" onClick={()=>onHandleIncreaseDislike(id)}><i className="fa fa-thumbs-o-down"></i> 
    //     Dislike <span className="qty1" name="qty1"  type="text" value="0">{Object.keys(likesPostData).length === 0?postData.postDisLiked:likesPostData.postDisLiked}</span>
    // </button>
       
        
        
    //     </div>
      
    //     <div className="content-post">
       
    //       <div className="content-post2" >
    //       {postData.content}</div>
    //     </div>
       
        
    //   </div> */}
    
      
  );
};

export default BlogPostDetails;
