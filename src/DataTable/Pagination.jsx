import React from 'react';
import Page from './Page';

// I can definetly shorten this with Context API, but as i said in the comments in the index, I have some errors and its taking too much time to fix them

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = Array.from(Array(totalNumberOfPages).keys()).map(
    (pageNumber) => {
      return (
        <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      );
    }
  );
  // Removed the if statement and added ternary to shorten the code
  return <ul className='pagination'>{pages.length <= 1 ? null : pages}</ul>;
};

export default Pagination;
