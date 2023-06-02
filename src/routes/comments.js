import express from 'express';

import { getBlogComment, getBlogComments, removeBlogComment, createBlogComment, updateBlogComment } from '../controllers/commentsController.js';

export const commentsRoutes = express.Router();

commentsRoutes.get('/:blogId/comments', getBlogComments);

commentsRoutes.get('/:blogId/comments/:id', getBlogComment);

commentsRoutes.post('/:blogId/comments', createBlogComment);

commentsRoutes.patch('/:blogId/comments/:id', updateBlogComment);

commentsRoutes.delete('/:blogId/comments/:id', removeBlogComment);

