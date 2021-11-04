import React, { useEffect } from 'react';
import WriteActionButtonS from 'components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost, updatePost } from 'modules/write';
import { withRouter } from 'react-router-dom';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();

  const { title, body, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, id: originalPostId }));
      return;
    }
    dispatch(writePost({ title, body }));
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id } = post;
      history.push(`/${_id}`);
    }

    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteActionButtonS
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    ></WriteActionButtonS>
  );
};

export default withRouter(WriteActionButtonsContainer);
