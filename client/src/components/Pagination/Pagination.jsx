import React from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      <button onClick={() => handlePageChange(1)}>First</button>
      {/* Mostrar números de página */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
      <button onClick={() => handlePageChange(totalPages)}>Last</button>
    </div>
  );
};

export default Pagination;
