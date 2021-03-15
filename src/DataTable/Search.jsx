import React from 'react';

// Cleaned the code, I don't think I can clean this more

const Search = ({ onSearch }) => {
  return (
    <div className='p-b-1'>
      <input
        type='search'
        className='form-control'
        placeholder='Søg brugere'
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
