'use client'
import React, { useEffect, useState } from 'react';
import scss from './Pagination.module.scss';

function Pagination({ maxCard, cardsLength, onPageChange }) {
  const totalPages = Math.ceil(cardsLength / maxCard);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleLinkClick = (pageNumber, numberLength) => {
    if (pageNumber === '...') {
      const direction = pageNumber === '...' && numberLength == 0 ? 'backward' : 'forward';
      const targetPage = direction === 'forward' ? totalPages : 1;
      setCurrentPage(targetPage);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const generatePages = () => {
    const totalVisiblePages = 5;
    const pages = [];

    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
      const rightBound = Math.min(totalPages, leftBound + totalVisiblePages - 1);

      for (let i = leftBound; i <= rightBound; i++) {
        pages.push(i);
      }

      if (leftBound > 1) {
        pages.unshift('...');
      }

      if (rightBound < totalPages) {
        pages.push('...');
      }
    }

    return pages;
  };

  return (
    <div className={scss.wrapper}>
      <div>
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          style={currentPage === 1 ? { borderColor: '#9e9e9e9d', cursor: 'not-allowed' } : null}
        ></div>
        <ul>
          {generatePages().map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <a href='/press/7'
                  onClick={() => handleLinkClick(page, index)}
                  className={scss.ellipsis}
                >
                  {page}
                </a>
              ) : (
                <a
                  onClick={() => handleLinkClick(page)}
                  className={currentPage === page ? scss.isClicked : ''}
                >
                  {page}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={() => handlePageChange(currentPage + 1)}
          style={currentPage === totalPages ? { borderColor: '#9e9e9e9d', cursor: 'not-allowed' } : null}
        ></div>
      </div>
    </div>
  );
}

export default Pagination;
