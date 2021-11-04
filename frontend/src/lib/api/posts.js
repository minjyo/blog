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

export const updatePost = ({ id, title, body }) => {
  return client.patch(`/api/posts/${id}`, { title, body });
};

export const removePost = (id) => {
  return client.delete(`/api/posts/${id}`);
};
