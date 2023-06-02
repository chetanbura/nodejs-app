import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { verifyJWT } from './src/utils/auth.js';
import { blogRouter } from './src/routes/blogs.js';
import { commentsRoutes } from './src/routes/comments.js';
import { authRouter } from './src/routes/auth.js';
import { usersRouter } from './src/routes/users.js';

const app = express();

app.use(bodyParser.json())

app.use(authRouter);

app.use((req, res, next) => {
  const token = req.headers.authorization;
  if(verifyJWT(token)) {
    next();
  } else {
    return res.status(403).json({ message: "You are unauthorize!" });
  }
});

app.use(usersRouter);

app.use('/blogs', commentsRoutes);

app.use(blogRouter);

app.get('/', function (req, res) {
  res.json('Hello World!!');
})

mongoose.connect('mongodb+srv://chetanbura:Ay0Li5uSgki9USFy@blogpost.ympzje6.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected!')
    app.listen(3000);
  });
