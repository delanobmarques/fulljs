import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';
//setup router
const router = express.Router();

// http://localhost:5000/posts

//adding routes
router.get('/', getPosts);
router.post('/', createPost);

export default router;