import React, { Fragment, useEffect } from "react";

import Header from "./Header";
import BlogPost from "./BlogPost";
import CustomeScrollBar from "./CustomeScrollBar";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogDetails } from "../Actions/letsThinkAction";

import { Link } from "react-router-dom";
import {Grid,styled ,Paper,CircularProgress,Button,Stack} from "@mui/material";


const LetsThink = () => {

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

  const { loading, allblogs, alltopicCount } = useSelector(
    (state) => state.postDetails
  );
  // console.log(state.postDetails);
  // console.log(loading);
  useEffect(() => {
   
    dispatch(getAllBlogDetails());
  }, [dispatch]);

  return (

    // <div className="main_body_container scrollveritcal">
      
    //   <div className="content-post">
    //     <button type="submit" className="btn_create">
    //       Create Post
    //     </button>
    //   </div>
    //   {loading?<Fragment><Loader/></Fragment>:<Fragment>
    //   {allblogs.map((blogdetails) => (
    //     <div className="content-post2" key={blogdetails._id}>
        
          
    //       <BlogPost key={blogdetails._id} blogData={blogdetails} />
         
          
    //     </div>
    //   ))}
    //     </Fragment>}
      
      
    // </div>
    <Fragment>
    
    {loading?<Fragment>
      {/* <CircularProgress /> */}
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
      </Fragment>:
      <Fragment>
    
    
    <Grid container spacing={1}>
    {allblogs?.map((blogdetails) => (
        
        
        <Grid item xs={12} md={8} lg={12} key={blogdetails._id}>
        <Item><BlogPost key={blogdetails._id} blogData={blogdetails} /></Item>
        </Grid> 
       
       
           
       
            
        

        
       
       
      ))}
      
      </Grid>
  
        </Fragment>}
   
    </Fragment>
  );
};

export default LetsThink;
