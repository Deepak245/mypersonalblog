import express from "express";
import {
  postTopic,
  getAllBlogPost,
  getSinglePost,
  updatePostLikes,

} from "../controllers/postController.js";
import rateLimiter from "express-rate-limit";

const rateLimter = rateLimiter({
    windowMs: 15*60*1000, // 15mins
    max:10,
    message:'Too many requests from this IP TRY AGAIN AFTER 15 MINS'
})

const router = express.Router();

router.route("/posttopic").post(postTopic);
router.route("/blogdetails/:id/:act").post(updatePostLikes);
router.route("/blogdetails/:id").get(getSinglePost);

router.route("/blogdetails").get(getAllBlogPost);

export default router;
