import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useProductContext } from '../productContext';

const Pagination = () => {
  const { page, hasNextPage, setPage } = useProductContext();

  /*  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.addEventListener('resize', checkSize);
    };
  });
 */
  return (
    <section className="pagination">
      {page !== 1 && <button onClick={() => setPage(1)}>1</button>}
      {page !== 1 && (
        <button onClick={() => setPage(page - 1)}>
          <FaChevronLeft />
        </button>
      )}
      {page > 2 && <button className="ellipsis">...</button>}
      {page > 2 && (
        <button onClick={() => setPage(page - 1)}>{page - 1}</button>
      )}
      <button className="active-page">{page}</button>

      {hasNextPage && (
        <button onClick={() => setPage(page + 1)}>{page + 1}</button>
      )}
      {hasNextPage && (
        <button onClick={() => setPage(page + 1)}>
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};

export default Pagination;
