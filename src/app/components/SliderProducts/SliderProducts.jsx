'use client'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SliderProducts.module.scss'
import Link from 'next/link';
import { CustomNextArrow, CustomPrevArrow } from './buttonSLider';
import axios from 'axios';
import Slider from 'react-slick';

function SliderProducts() {
    const [data, setData] = useState([])
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://652d5af4f9afa8ef4b2750f6.mockapi.io/purchaseCard')
                setData(res.data)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (
        <div className={styles.slider}>
            <div className={styles.title}>
                <div className={styles.line}></div>
                <Link href='/'>Новинки</Link>
                <div className={styles.line}></div>
            </div>
            <div className={styles.sliderSlick}>
                <Slider {...settings}>
                    {data.map((item) => (
                        // <Link className={styles.link} href='/'>
                        <div key={item.id} className={styles.sliderInfo}>
                            <img src='/imgs/slider/Benstrep.png' alt={item.title} />
                            <div className={styles.info}>
                                <h1>Бенстреп LA</h1>
                                <p>Суспензия для инъекций</p>
                                <img className={styles.animals} src="/imgs/slider/icon.png" alt="" />
                            </div>
                        </div>
                        // </Link>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SliderProducts