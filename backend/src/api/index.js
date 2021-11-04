import Router from 'koa-router';
import posts from './posts/index.js';
import comments from './comments/index.js';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/comments', comments.routes());

export default api;
