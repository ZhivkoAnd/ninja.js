import React from 'react';


// Cleaned the code, I don't think I can clean this more

const Row = ({ row }) => {
  return (
    <tr>
      <td>
        <a href={row.edit_path}>{row.name1}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

export default Row;
