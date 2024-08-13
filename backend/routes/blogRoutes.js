import express from 'express'
import {addBlog,getBlog,addComment,addLike} from '../controllers/blogController.js';
const blogRoute=express.Router();
import authMiddleware from '../middleware/auth.js';

blogRoute.post('/add-blog',authMiddleware,addBlog)
blogRoute.get('/get-blog',getBlog)
blogRoute.post('/add-comment',authMiddleware,addComment);
blogRoute.post('/like',authMiddleware,addLike)

export default blogRoute;