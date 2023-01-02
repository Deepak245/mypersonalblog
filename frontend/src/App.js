// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import MovieReviews from "./Components/Movies/MovieReviews";
import LetsThink from "./Components/LetsThink";
import Prefix from "./Components/Prefix";
import AdminPurpose from "./Components/AdminPurpose";
import SharedLayout from "./Components/SharedLayout";
import Landing from "./Components/Landing"
import ProtectedRoute from "./Components/ProtectedRoute"

//for displaying blog post data.
import BlogPostDetails from "./Components/BlogPostDetails";
import BlogPost from "./Components/BlogPost";

import MovieReviewsDetails from "./Components/Movies/MovieReviewsDetails";
import MovieReviewContent from "./Components/Movies/MovieReviewContent"

//material ui design
import {Container } from '@mui/material'

function App() {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<SharedLayout />}>
          <Route path ="prenote" element={<Prefix/>}/>
          {/* un comment below lines when home component is build and reverse the paths */}
          {/* <Route index element={<Home />} />
          <Route path="lets-think" element={<LetsThink />} /> */}
          <Route path="home" element={<Home />} />
          <Route index element={<LetsThink />} />
          <Route path="/blogdetails/:id" element={<BlogPostDetails />} exact />
          <Route path="movie-reviews" element={<MovieReviews />} />
          <Route path="/reviewdetails/:id" element={<MovieReviewContent />} exact />
          <Route path="/landing" element={<Landing/>}/>
          <Route path="admin" element={<ProtectedRoute><AdminPurpose /></ProtectedRoute>} />
        </Route>
        
        {/* <Route path="/blogdetails/:id" element={<BlogPost />} exact /> */}
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
