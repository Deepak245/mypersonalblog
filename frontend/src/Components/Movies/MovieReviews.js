import React, { Fragment, useEffect }  from 'react';

// import BlogPost from "./BlogPost";
import MovieReviewsDetails from './MovieReviewsDetails';

import { useDispatch, useSelector } from "react-redux";
import {getAllMovieReviewDetails} from "../../Actions/movieAction"



import {Grid,styled ,Paper,CircularProgress,Stack} from "@mui/material";

const MovieReviews = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#4acfee',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'left',
    // color: theme.palette.text.primary,
    color:'#fff'
  }));
  // console.log("In Lets think page");


  const dispatch = useDispatch();

  const { loading, allmoviereviews, allmoviereviewsCount } = useSelector(
    (state) => state.reviewDetails
  );
  // console.log(state.postDetails);
  // console.log(loading);
  useEffect(() => {
   
    dispatch(getAllMovieReviewDetails());
    
  }, [dispatch]);

  return (

    
    <Fragment>
    
    {loading?<Fragment>
      {/* <CircularProgress /> */}
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
      </Fragment>:
      <Fragment>
    
    
    <Grid container spacing={1}>
    {allmoviereviews?.map((review) => (

        <Grid item xs={12} md={8} lg={12} key={review._id}>
        <Item><MovieReviewsDetails key={review._id} movieReviewData={review} /></Item>
        </Grid> 

      ))}
      
      </Grid>
  
        </Fragment>}
   
    </Fragment>
  );
}

export default MovieReviews
