import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl.js';

const comments = new Router();

comments.get('/:postId', commentsCtrl.checkObjectId, commentsCtrl.list);
comments.post('/', commentsCtrl.checkObjectId, commentsCtrl.write);

export default comments;
