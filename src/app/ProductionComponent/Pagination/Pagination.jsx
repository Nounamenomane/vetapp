'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PaginationMap from './PaginationMap';
import ProductionCard from './ProductionCard';
import styles from './Pagination.module.scss';

function Pagination() {
    const [originalData, setOriginalData] = useState([]);
    const [isCard, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage] = useState(21);
    const [sortOption, setSortOption] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getCard = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://652d5af4f9afa8ef4b2750f6.mockapi.io/header"
            );
            setCard(res.data);
            setOriginalData(res.data); // Сохраните исходные данные без сортировки
            setLoading(false);
        };
        getCard();
    }, []);

    // Функция для фильтрации и сортировки данных
    const getFilteredAndSortedData = () => {
        let filteredData = originalData;

        // Фильтрация по поисковому запросу
        filteredData = filteredData.filter(card =>
            card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Сортировка
        if (sortOption === 'A-Z') {
            filteredData = filteredData.slice().sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'Z-A') {
            filteredData = filteredData.slice().sort((a, b) => b.name.localeCompare(a.name));
        }

        return filteredData;
    };

    const filteredAndSortedData = getFilteredAndSortedData();
    const lastCardIndex = currentPage * cardPerPage;
    const firstCardIndex = lastCardIndex - cardPerPage;
    const currentCardIndex = filteredAndSortedData.slice(firstCardIndex, lastCardIndex);

    const nextPage = () => {
        setCurrentPage((prev) => prev + 1);
        window.scrollTo(0, 0);
    };

    const prevPage = () => {
        setCurrentPage((prev) => prev - 1);
        window.scrollTo(0, 0);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={styles.Pagination}>
            <div >
                <div className={styles.searchInput}>
                    <h2>Поиск</h2>
                    <input className={styles.text}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Название продукта' />
                    <input className={styles.submit} />
                </div>
                <div className={styles.sort}>
                    <h2>Сортировать</h2>
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="All">Все</option>
                        <option value="A-Z">А-Я</option>
                        <option value="Z-A">Я-А</option>
                    </select>
                </div>
            </div>
            <div>
                <ProductionCard isCard={currentCardIndex} loading={loading} />
                <div className={styles.line1}></div>
                <div className={styles.paginate}>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <img src="/imgs/left.png" alt="" />
                    </button>
                    <PaginationMap
                        totalCard={filteredAndSortedData.length}
                        cardPerPage={cardPerPage}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                    <button
                        onClick={nextPage}
                        disabled={
                            currentPage === Math.ceil(filteredAndSortedData.length / cardPerPage)
                        }
                    >
                        <img src="/imgs/right.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
