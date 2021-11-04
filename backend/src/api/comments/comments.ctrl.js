import Comment from '../../models/comment.js';
import mongoose from 'mongoose';
import Joi from 'joi';
import JoiId from 'joi-objectid';

const { ObjectId } = mongoose.Types;

// OjbectId 검증
export const checkObjectId = (ctx, next) => {
  const { postId } = ctx.params;
  if (!ObjectId.isValid(postId)) {
    ctx.status = 400;
    return;
  }
  return next();
};

/* 댓글 작성
  POST /api/comments
  { 
    username: '작성자 이름',
    body: '내용',
    postId: '포스트 아이디'
  }
*/
export const write = async (ctx) => {
  Joi.objectId = JoiId(Joi);

  // 객체가 다음 필드를 가지고 있는지 검증
  const schema = Joi.object().keys({
    username: Joi.string().required(), // required()가 있으면 필수 항목
    body: Joi.string().required(),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, body } = ctx.request.body;
  const { postId } = ctx.params;
  const comment = new Comment({
    username,
    body,
    postId,
  });
  try {
    await comment.save(); // 데이터 베이스에 저장
    ctx.body = comment;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트의 댓글 목록 조회
  GET /api/comments/:postId
*/
export const list = async (ctx) => {
  const { postId } = ctx.params;
  try {
    const comments = await Comment.find({ postId: postId }).exec();
    const commentCount = await Comment.countDocuments().exec();
    ctx.set('Comment-Count', commentCount); // 포스트의 총 댓글 개수
    ctx.body = comments
      .map((comment) => comment.toJSON()) // or lean()
      .map((comment) => ({
        ...comment,
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};
