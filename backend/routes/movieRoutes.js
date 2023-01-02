import express from "express";
import {
    movieReview, getAllMovieReviews, getSingleMovieReview,updateReviewLikes

} from "../controllers/movieController.js";




const router = express.Router();

router.route("/moviereview").post(movieReview);
router.route("/reviewlikes/:id/:act").post(updateReviewLikes);
router.route("/reviewdetails/:id").get(getSingleMovieReview);

router.route("/reviewdetails").get(getAllMovieReviews);

export default router;