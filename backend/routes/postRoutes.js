import express from "express";
import {
  postTopic,
  getAllBlogPost,
  getSinglePost,
} from "../controllers/postController.js";

const router = express.Router();

router.route("/posttopic").post(postTopic);
router.route("/blogdetails/:id").get(getSinglePost);
router.route("/blogdetails").get(getAllBlogPost);

export default router;
