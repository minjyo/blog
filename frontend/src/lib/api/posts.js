import client from './client';
import axios from 'axios';

export const writePost = async ({ title, body }) => {
  return client.post('/api/posts', { title, body });
  // const response = await axios.post('/api/posts', { title, body });
  // const response = await axios.get('/api/posts');
  // return response.data;
};
