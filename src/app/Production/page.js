'use client'
import Header from '../components/Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import styles from './Production.module.scss'
import Sidebar from '../ProductionComponent/Sidebar/Sidebar';
import Pagination from '../ProductionComponent/Pagination/Pagination';
import InfoProduction from '../ProductionComponent/infoProduction/InfoProduction';
import Footer from '../components/Footer/Footer';
import { useState } from 'react'

function Production() {
    const [category, setCategory] = useState('Продукция');

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        { pathname: '/Production', breadcrumb: 'Продукция' },
        { pathname: category, breadcrumb: category }
    ];

    const handleSidebarItemClick = (category) => {
        setCategory(category);
    };
    return (
        <div className={styles.production}>
            <Header />
            <div className='line'></div>
            <Breadcrumbs crumbs={breadcrumbs} />
            <div className={styles.production_info}>
                <div className={styles.sidebar}>
                    <Sidebar onSidebarItemClick={handleSidebarItemClick} />
                </div>
                <div className={styles.pagination}>
                    <h1>{category}</h1>
                    <Pagination />
                    <div className={styles.line1} ></div>
                    <InfoProduction category={category} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Production