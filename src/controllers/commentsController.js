import { CommentModel } from '../model/commentModel.js';
import { catchWrapper } from '../utils/catchWrapper.js';

export const getBlogComments = (req, res, next) => {
  return catchWrapper(async () => {
    const blogId = req.params['blogId'];
    const comments = await CommentModel.find({ blogId: blogId });
    return res.status(200).json({ data: { comments } });
    }, 'Blog Comments');
}

export const getBlogComment = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    const comment = await CommentModel.findById(id);
    return res.status(200).json({ data: { comment } });
  }, 'Blog Comments');
}

export const createBlogComment = (req, res, next) => {
  return catchWrapper(async () => {
    const blogId = req.params['blogId'];
    const title = req.body['title'];
    const content = req.body['content'];
    const userId = req.body['userId'];
    const comment = await new CommentModel({ userId, blogId, title, content }).save();
    return res.status(201).json({ message: "Blog comment created successfully", data: { comment } });
  }, 'Blog Comments');
}

export const updateBlogComment = (req, res, next) => {
  return catchWrapper(async () => {
      const id = req.params['id'];
      const blogId = req.params['blogId'];
      const title = req.body['title'];
      const content = req.body['content'];
      const userId = req.body['userId'];
      const comment = await CommentModel.findByIdAndUpdate(id, { userId, blogId, title, content });
      comment.save();
      return res.status(200).json({ message: "Blog comment updated successfully", data: { comment } });
  }, 'Blog Comments');
}

export const removeBlogComment = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    await CommentModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Blog comment deleted successfully" });
  }, 'Blog Comments');
}