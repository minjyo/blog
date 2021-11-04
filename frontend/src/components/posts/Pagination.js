import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import qs from 'qs';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem;
`;

const PageNumber = styled.div``;

const buildLink = (page) => {
  const query = qs.stringify({ page });
  return `/?${query}`;
};

const Pagination = ({ page, lastPage }) => {
  return (
    <PaginationBlock>
      <Button
        color="true"
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink(page - 1)}
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        color="true"
        disabled={page === lastPage}
        to={page === lastPage ? undefined : buildLink(page + 1)}
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
