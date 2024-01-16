'use client'
import Breadcrumbs from '@/app/Breadcrumbs/Breadcrumbs';
import Header from '@/app/components/Header/Header'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './DetailProductInfi.module.scss'
import DetailProductInfi from './DetailProductInfi';
import Sidebar from '@/app/ProductionComponent/Sidebar/Sidebar';
import Footer from '@/app/components/Footer/Footer';

function DetailProduct({ params }) {

    const [isProduct, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(`https://652d5af4f9afa8ef4b2750f6.mockapi.io/header/${params.id}`)
            setProduct(res.data)
        }
        getProduct()
    }, [])

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        { pathname: '/Production', breadcrumb: 'Продукция' },
        { pathname: `/Detail/${isProduct.name}`, breadcrumb: `${isProduct.name}` }
    ];

    return (
        <div className={styles.detail_page}>
            <Header />
            <div className='line'></div>
            <Breadcrumbs crumbs={breadcrumbs} />
            <div className={styles.detail_info}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.detailProduct}>
                    <DetailProductInfi isProduct={isProduct} />
                </div>
            </div>
            <Footer />
        </div>

    )

}

export default DetailProduct
