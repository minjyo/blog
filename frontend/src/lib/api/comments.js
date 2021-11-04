import client from './client';

export const writeComment = ({ username, body, postId }) => {
  return client.post(`/api/comments/${postId}`, { username, body });
};

export const listComments = (postId) => {
  return client.get(`/api/comments/${postId}`);
};
