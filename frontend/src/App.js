import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import MovieReviews from "./Components/MovieReviews";
import LetsThink from "./Components/LetsThink";
import SharedLayout from "./Components/SharedLayout";

//for displaying blog post data.
import BlogPostDetails from "./Components/BlogPostDetails";
import BlogPost from "./Components/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="lets-think" element={<LetsThink />} />
          <Route path="movie-reviews" element={<MovieReviews />} />
          <Route path="/blogdetails/:id" element={<BlogPostDetails />} exact />
        </Route>

        {/* <Route path="/blogdetails/:id" element={<BlogPost />} exact /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
