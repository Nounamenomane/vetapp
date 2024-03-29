import React from 'react';
import styles from './Pagination.module.scss';

function PaginationMap({ totalCard, cardPerPage, currentPage, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCard / cardPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        paginate(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.paginationBtn}>
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    className={`${styles.btnPaginate} ${currentPage === number ? styles.activePage : ''}`}
                    onClick={() => handlePageClick(number)}
                >
                    {number}
                </button>
            ))}
        </div>
    );
}

export default PaginationMap;
