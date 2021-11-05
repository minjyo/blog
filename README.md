# BLOG
Smilegate Stove Dev Camp 사전 과제 📝

Web Frontend 민지호
<br/>
<br/>
<br/>

## 🛠 요구사항
### 1. 포스트 작성
- POST /api/posts/${id}
- WRITE_POST {title, body} 

![writePost](https://user-images.githubusercontent.com/24283401/140435565-92d375e3-bd40-43d9-87ec-10ecb718d136.gif)

<br/>

### 2. 포스트 수정
- PATCH /api/posts/${id}
- UPDATE_POST {title, body}

![updatePost](https://user-images.githubusercontent.com/24283401/140435719-c02eb76b-eed8-4dfb-9961-705ed3c33c14.gif)

<br/>

### 3. 포스트 삭제
- DELETE /api/posts/${id}
- REMOVE_POST

![removePost](https://user-images.githubusercontent.com/24283401/140436084-f29c3ccf-d42d-4140-890a-5e61fc45da0e.gif)

<br/>

### 4. 포스트 리스트 조회
- GET /api/posts?page=1
- LIST_POST 

![listPost](https://user-images.githubusercontent.com/24283401/140436310-55853a71-ffd9-46a2-83c0-06204baa1e01.gif)

<br/>

### 5. 포스트 조회
- GET /api/posts/${id}
- READ_POST
(위 화면들에서 볼 수 있음)

<br/>

### 6. 포스트의 댓글 리스트 조회
- GET /api/comments/${postId}
- LIST_COMMENT

![listComment](https://user-images.githubusercontent.com/24283401/140437361-be7e2eef-37e7-4068-a931-57b6afce10bf.gif)

<br/>

### 7. 포스트에 댓글 작성 
- POST /api/comments/${postId} 
- WRITE_COMMENT {username, body}

![writeComment](https://user-images.githubusercontent.com/24283401/140437226-8412c1c1-a2c8-45fd-badc-8a53f165db3b.gif)


<br/>
<br/>

## 🛠 프로젝트 구조
- backend

![스크린샷 2021-11-05 오전 7 59 53](https://user-images.githubusercontent.com/24283401/140431875-7e4ffdc4-a91c-4313-81f2-2b2fd351d6b3.png)
<br/>
- frontend

![스크린샷 2021-11-05 오전 7 59 08](https://user-images.githubusercontent.com/24283401/140431812-7eb3ed71-6a5f-43a4-b956-b64bfb1094a5.png)
<br/>
<br/>

## 🛠 DB

- blogs.post

![스크린샷 2021-11-05 오전 8 59 11](https://user-images.githubusercontent.com/24283401/140436464-ed597e38-39ba-4581-94b0-0458a790c123.png)

<br/>

- Blog.comments

![스크린샷 2021-11-05 오전 9 07 03](https://user-images.githubusercontent.com/24283401/140437024-f5f5982c-b8dd-46d4-9cd0-14f929e49b69.png)

<br/>
<br/>

## 🛠 Skill & Dependency
- backend: Node.js, mongoose(MongoDB), Joi, Koa 
```javascript
"dependencies": {
    "dotenv": "^10.0.0",
    "joi": "^17.4.2",
    "joi-objectid": "^4.0.2",
    "koa": "^2.13.4",
    "koa-bodyparser": "^4.3.0",
    "koa-router": "^10.1.1",
    "mongoose": "^6.0.12",
    "sanitize-html": "^2.5.3"
  }
```
- frontend: React.js, redux, react-dom, redux-saga, axios, styled-components, quill
```javascript
"dependencies": {
    "axios": "^0.24.0",
    "qs": "^6.10.1",
    "quill": "^1.3.7",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-helmet-async": "^1.1.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.2",
    "redux-actions": "^2.6.5",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.3.3",
  },
```
<br/>

## 🛠 Execution
- backend
```javascript
yarn start:dev # localhost:4000
```
- frontend
```javascript
yarn start # localhost:3000
```
<br/>
