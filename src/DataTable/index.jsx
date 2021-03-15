import React, { useState } from 'react';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';
// import { useContext } from 'react';
// import { PageContext } from './PageContext';

// I have the idea to add context API so i can prevent prop drilling in the future..which will allow to easily add new components, 
//   without stacking unneeded properties, but i have some errors.. 
// I havent worked with App.test.js before, and adding Context API with the 'const rows' is giving me plenty of errors, I can move the const from there and fix it,
//   but I know there must be a better way, I just dont know how to, for the time being.

// I am sending it because I know it's a 2 hour task and I dont want to spend too much time on it. 
// I don't have a lot of proffesional exp. with React, but I have a passion for it and I am learning fast. If I have some guidance, I can definitely achieve a lot.

const DataTable = ({ initialRows, rowsPerPage = 40 }) => {
  const [rows, setRows] = useState(initialRows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const calculateTotalNumberOfPages = (rows) => {
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  };

  const [totalNumberOfPages, setTotalNumberOfPages] = useState(
    calculateTotalNumberOfPages(initialRows)
  );

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = initialRows;

    if (text) {
      rowsFound = initialRows.filter(
        (row) =>
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          row.email.toLowerCase().search(text.toLowerCase()) > -1
      );
    }

    setRows(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound));
  };

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = rows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber}
      />
    </div>
  );
};

export default DataTable;
