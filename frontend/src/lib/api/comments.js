import client from './client';

export const writeComment = ({ username, body, postId }) => {
  return client.post('/api/comments', { username, body, postId });
};

export const listComments = (postId) => {
  return client.get(`/api/comments/${postId}`);
};