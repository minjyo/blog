import client from './client';

export const writePost = ({ title, body }) => {
  return client.post('/api/posts', { title, body });
};

export const readPost = (id) => {
  return client.get(`/api/posts/${id}`);
};
