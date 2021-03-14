// I could add Context API but I didn't since the project was too small, I added this file just to showcase that I know how to do it

import React, { useState, createContext } from 'react';
export const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  return (
    // Then we pass the current user that we get from firebase to the components
    <PageContext.Provider value={{ currentPageNumber, setCurrentPageNumber }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
