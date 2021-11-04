import React from 'react';
import Responsive from 'components/common/Responsive';
import WriteActionButtonS from 'components/write/WriteActionButtons';
import EditorContainer from 'containers/write/EditorContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtonS />
    </Responsive>
  );
};

export default WritePage;
