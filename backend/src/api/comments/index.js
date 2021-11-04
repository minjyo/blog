import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl.js';

const comments = new Router();

comments.get('/', commentsCtrl.list);
comments.post('/', commentsCtrl.write);

export default comments;
