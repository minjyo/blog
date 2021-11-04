import React, { useEffect, useCallback } from 'react';
import Editor from 'components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from 'modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();

  const { title, body, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    originalPostId: write.originalPostId,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, originalPostId]);

  return (
    <Editor onChangeField={onChangeField} title={title} body={body}></Editor>
  );
};

export default EditorContainer;
