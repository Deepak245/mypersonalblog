import React from 'react'
import { Link } from "@mui/material";

const MovieReviewsDetails = (movieReviewData) => {
    // console.log(movieReviewData)
    return (
        <>
          
          
          <Link href={`/reviewdetails/${movieReviewData.movieReviewData._id}`} underline="none" color="#fff">
            {movieReviewData.movieReviewData.title}
          </Link>
        </>
      );

}

export default MovieReviewsDetails
