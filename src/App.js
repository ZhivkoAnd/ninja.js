import React from 'react';
import DataTable from './DataTable';
import './App.css';
// Importing the Context, just to showcase, but I am not using it.
import { PageProvider } from './DataTable/PageContext';

const App = ({rows}) => {
  return (
    <PageProvider>
      <div className='container mt-3'>
        <DataTable initialRows={rows} locale='da' rowsPerPage={5} />
      </div>
    </PageProvider>
  );
};

export default App;
