import express from "express";

import { getBlogs, getBlog, updateBlog, insertBlog, removeBlog } from '../controllers/blogsController.js';

export const blogRouter = express.Router();

blogRouter.get('/blogs', getBlogs);

blogRouter.get('/blogs/:id', getBlog);

blogRouter.post('/blogs', insertBlog);

blogRouter.patch('/blogs/:id', updateBlog);

blogRouter.delete('/blogs/:id', removeBlog);