import client from './client';
import qs from 'qs';

export const writePost = ({ title, body }) => {
  return client.post('/api/posts', { title, body });
};

export const readPost = (id) => {
  return client.get(`/api/posts/${id}`);
};

export const listPosts = (page) => {
  const queryString = qs.stringify({
    page,
  });
  return client.get(`/api/posts?${queryString}`);
};
