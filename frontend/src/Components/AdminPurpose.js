import React, { useState } from 'react'
import { Button,Grid, InputLabel,TextField, Divider } from '@mui/material'
// import { makeStyles, ThemeProvider } from "@mui/styles"



import { useDispatch} from "react-redux";
import { createPost } from "../Actions/letsThinkAction";
import {createReview} from "../Actions/movieAction";

// const useStyles = makeStyles({
//     title:{flexGrow:1},
//     tagline:{
//       fontSize:'1rem',
//       '@media (min-width:600px)': {
//         fontSize: '1.5rem',
//       },
//       justifyContent:"right",
//       fontFamily:'Montserrat',
//       InputLabelDet:{
       
//         color:'red'
//       }
//     }
//   })

  

const AdminPurpose = () => {
  // const classes = useStyles();
   const [postContent,setPostContent]=useState("");
   const [postTitle,setPostTitle]=useState("");
   const [reviewContent,setReviewContent]=useState("");
   const [movieTitle,setMovieTitle]=useState("");
   
    const dispatch = useDispatch();
  const onHandleCreatePost=()=>{
    const title=postTitle;
    const content=postContent;
    const postData = {title,content}
    
    dispatch(createPost(postData))
    alert("Post Created Successfully")
  }

  const onHandleCreateMovieReview=()=>{
    const title=movieTitle;
    const content=reviewContent;
    const reviewData = {title,content}
    
    dispatch(createReview(reviewData))
    alert("Review Created Successfully")
  }
  
  return (
    <>
    {/* <Stack spacing={2} direction="row"> */}
    <Grid container={true}>
     <InputLabel style={{color:'black'}} >Enter Title of The Poll*:</InputLabel>
     <TextField sx={{width:'500px'}}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Enter Title of Poll"
        />
     </Grid>
     <Button variant="contained">Create Poll</Button>
     <Divider variant="middle" sx={{bgcolor:'red'}}/>
     <br/>
     <Grid container={true}>
     <InputLabel style={{color:'black'}} >Enter Title of The Post*:</InputLabel>
     <TextField sx={{width:'500px'}}
          required
          id="outlined-required"
          label="Required"
          name='posttitle'
          
          onChange={(e)=>setPostTitle(e.target.value)}
          value={postTitle}
        />
     </Grid>
     <br/>
     <Grid container={true}>
     <InputLabel style={{color:'black'}} >Enter Post Content:</InputLabel>
     <TextField sx={{width:'500px'}}
          required
          id="outlined-required"
          label="Required"
          name='postcontent'
          onChange={(e)=>setPostContent(e.target.value)}
          value={postContent}
        />
     </Grid>
     <Button variant="contained" size="small" onClick={onHandleCreatePost}>Create Post</Button>
     <Divider variant="middle" sx={{bgcolor:'red'}}/>
     <br/>
     <Grid container={true}>
     <InputLabel style={{color:'black'}} >Enter Title of The Movie*:</InputLabel>
     <TextField sx={{width:'500px'}}
          required
          id="outlined-required"
          label="Required"
          name='movietitle'
          
          onChange={(e)=>setMovieTitle(e.target.value)}
          value={movieTitle}
        />
     </Grid>
     <br/>
     <Grid container={true}>
     <InputLabel style={{color:'black'}} >Enter Review of Movie Content*:</InputLabel>
     <TextField sx={{width:'500px'}}
          required
          id="outlined-required"
          label="Required"
          name='reviewcontent'
          onChange={(e)=>setReviewContent(e.target.value)}
          value={reviewContent}
        />
     </Grid>
     <Button variant="contained" onClick={onHandleCreateMovieReview}>Create Review</Button>
    
    {/* </Stack> */}
    </>
  )
}

export default AdminPurpose
