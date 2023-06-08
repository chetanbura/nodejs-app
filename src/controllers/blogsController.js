import { BlogModel } from '../model/blogModel.js';
import { catchWrapper } from '../utils/catchWrapper.js';

export const getBlogs = (req, res, next) => {
  return catchWrapper(async () => {
  const blogs = await BlogModel.find();
  return res.status(200).json({ "data": { blogs } });
  }, 'Blog');
}

export const getBlog = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    const blog = await BlogModel.findById(id);
    return res.status(200).json({ "data": { blog } });
  }, 'Blog');
}

export const insertBlog = (req, res, next) => {
  return catchWrapper(async () => {
    const title = req.body['title'];
    const content = req.body['content'];
    const userId = req.body['userId'];
    const blog = await new BlogModel({ title, content, userId }).save();
    return res.status(201).json({ message: "Blog created successfully", data: { blog } });
  }, 'Blog');
}

export const updateBlog = (req, res, next) => {
  return catchWrapper(async () => {
  const id = req.params['id'];
  const title = req.body['title'];
  const content = req.body['content'];
  const userId = req.body['userId'];
  const blog = await BlogModel.findByIdAndUpdate(id, { title, content, userId });
  blog.save();
  return res.status(200).json({ message: "Blog updated successfully", data: { blog } });
}, 'Blog');
}

export const removeBlog = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    await BlogModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Blog deleted successfully" });
}, 'Blog');
}