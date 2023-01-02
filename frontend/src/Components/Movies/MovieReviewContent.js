
import React, {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {getSingleReviewDetails,updateReviewLikesCount} from "../../Actions/movieAction"


import {Card,  CardContent, Grid,Typography,Button,Box  } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {useStylesBlogDetailsPage} from "../../WrapperStyles/BlogDetailStyle";


const MovieReviewContent = () => {
    // console.log(props);
    const designCard = useStylesBlogDetailsPage();
    const { id } = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const { loading, reviewData } = useSelector((state) => state.singleReviewDetails);
    const {likesReviewData} = useSelector((state)=>state.reviewLikeDetails);
    // console.log(reviewData);
    // console.log(likesReviewData);
    useEffect(() => {
      // console.log(id);
      dispatch(getSingleReviewDetails(id));
    }, [id]);
    const onHandleIncreaseLike =(id)=>{
      dispatch(updateReviewLikesCount(id,'like'));
    }
    const onHandleIncreaseDislike =(id)=>{
      dispatch(updateReviewLikesCount(id,'dislike'));
    }
    return (
      <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
        
          <Card >
            <CardContent>
            <Box
                m={0.5}
                sx={{mt: 2}}
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
               
              >
               
                <Button color="primary" variant="contained" sx={{ height: 30 }} onClick={()=>onHandleIncreaseLike(id)} startIcon={<ThumbUpIcon /> }>
                  Like :
                  <Typography>{Object && Object.keys(likesReviewData).length === 0?reviewData.postLiked:likesReviewData.postLiked}</Typography>
                  
                </Button>
                <Button color="primary"  variant="contained"  sx={{ height: 30 }}  onClick={()=>onHandleIncreaseDislike(id)} startIcon={<ThumbDownIcon />}>
                  DisLke : <Typography>{Object.keys(likesReviewData).length === 0?reviewData.postDisLiked:likesReviewData.postDisLiked}</Typography>
                </Button>
              </Box>
              
           
            
            <Typography align="center" color="common.black" gutterBottom>
              <strong>
             {reviewData.title}
              
              </strong>
              
              
             
              
            </Typography>
            <Typography alignContent={"center"} className={designCard.contentFontFamily}>
            {reviewData.content}
            </Typography>
            </CardContent>
          
          </Card>
        
      </Grid>
      
     
      
        
    );
}

export default MovieReviewContent
