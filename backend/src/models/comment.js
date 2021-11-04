import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  username: String,
  body: String,
  postId: mongoose.Types.ObjectId,
});

const Comment = mongoose.model('Comment', CommentSchema); // 컬렉션 이름: comments
export default Comment;
