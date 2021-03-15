import React from 'react';

// Cleaned the code
const Page = ({ pageNumber, currentPageNumber, onChange }) => {

  const isActivePage = () => {
    return currentPageNumber == pageNumber;
  };

  const renderedPageNumber = () => {
    return pageNumber + 1;
  };

  const click = (e) => {
    e.preventDefault();
    onChange(pageNumber);
  };
  // Removed the If statement and added ternary, which shortened the html by half. If the page is active, it will add a special class to that specific button
  return ( 
    <li className='page-item mr-1'>
      <button
        className={isActivePage() ? 'page-link button-outline' : 'page-link'}
        onClick={click}>
        {renderedPageNumber()}
      </button>
    </li>
  );
};

export default Page;
