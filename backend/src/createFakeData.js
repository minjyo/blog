import Post from './models/post.js';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: '111',
    tags: ['fake', 'data'],
  }));

  Post.insertMany(posts, (err, docs) => {
      console.log(docs);
  })
}
