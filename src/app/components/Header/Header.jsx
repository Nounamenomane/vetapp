'use client'
import React, { useRef, useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { useClickOutside } from './hooks/useClickOutside';

function Header() {
    const [isOpenSaider, setOpenSaider] = useState(false)

    const [isText1, setText1] = useState(false)
    const [isText2, setText2] = useState(false)
    const [isText3, setText3] = useState(false)
    const [isText4, setText4] = useState(false)

    const menuRef = useRef(null)
    useClickOutside(menuRef, () => setOpenSaider(false))

    return (
        <div className={styles.header}>
            <div className={styles.contacts_header}>
                <Link href='/email'>info@beleka.by</Link>
                <Link href='/number'>+375 1713 70300</Link>
            </div>
            <div className={styles.header_container} >
                <div className={styles.header_navigation}>
                    <div className={styles.header_logo}>
                        <img className={styles.logo} src='/imgs/logo.png' alt="logo page" />
                        <Link href="/">
                            <img className={styles.logo} src='/imgs/gmp_logo.png' alt="logo gmp" />
                        </Link>
                    </div>
                    <div className={`${styles.menu_list} ${isOpenSaider ? styles.active : ''}`} ref={menuRef}>
                        <Link href="/about">
                            О компании
                        </Link>
                        <span className={styles.line}></span>
                        <Link href="/services">
                            Услуги
                        </Link>
                        <span className={styles.line}></span>
                        <div className={styles.item3}>
                            <div onMouseEnter={() => setText1(!isText1)} onMouseLeave={() => setText1(isText1)} className={styles.menu_icon}>
                                <Link href="/catalog">
                                    Продукция
                                </Link>
                                <button onClick={() => setText1(!isText1)} className={`${styles.triangle} ${isText1 ? styles.isText1 : ''}`}></button>
                            </div>
                            {isText1 &&
                                <div className={styles.dropdown} >
                                    <div className={styles.dropContent}>
                                        <div className={styles.menu_icon}>
                                            <Link href="/preparats">
                                                Ветеринарные препараты
                                            </Link>
                                            <button onClick={() => setText3(!isText3)} className={`${styles.triangle} ${isText3 ? styles.isText3 : ''}`}></button>
                                        </div>
                                        {isText3 && <div className={styles.menuContect}>
                                            <Link href='/'>
                                                Акушерско-гинекологические препараты
                                            </Link>
                                            <Link href='/'>
                                                Антибактериальные препараты
                                            </Link><Link href='/'>
                                                Нестероидные противовоспалительные средства
                                            </Link><Link href='/'>
                                                Препараты для профилактики и лечения заболеваний вымени
                                            </Link><Link href='/'>
                                                Препараты для профилактики и лечения нарушений обмена веществ
                                            </Link><Link href='/'>
                                                Прочие препараты
                                            </Link>
                                            <Link href='/'>
                                                Средства для наружного применения
                                            </Link>
                                        </div>}
                                        <span className={styles.line}></span>
                                        <div className={styles.menu_icon}>
                                            <Link href="/corm">
                                                Кормовые добавки и комбикорма
                                            </Link>
                                            <button onClick={() => setText4(!isText4)} className={`${styles.triangle} ${isText4 ? styles.isText4 : ''}`}></button>
                                        </div>
                                        {isText4 && <div className={styles.menuContect}>
                                            <Link href='/'>
                                                Белково-витаминно-минеральные добавки
                                            </Link>
                                            <Link href='/'>
                                                Брикет-лизунец
                                            </Link><Link href='/'>
                                                Витаминно-минеральные добавки
                                            </Link><Link href='/'>
                                                Гепатопротектор
                                            </Link><Link href='/'>
                                                Заменители цельного молока
                                            </Link><Link href='/'>
                                                Комбикорма
                                            </Link>
                                            <Link href='/'>
                                                Лизунцы мелассированные
                                            </Link>
                                            <Link href='/'>
                                                Подкислитель/дезинфектант
                                            </Link><Link href='/'>
                                                Премиксы
                                            </Link><Link href='/'>
                                                Прикормки рыболовные
                                            </Link><Link href='/'>
                                                Раскислитель кормов (буфер)
                                            </Link><Link href='/'>
                                                Энергетические добавки
                                            </Link>
                                        </div>}
                                    </div>
                                </div>
                            }
                        </div>
                        <span className={styles.line}></span>
                        <Link href="/dealers">
                            Дистрибьюторы
                        </Link>
                        <span className={styles.line}></span>
                        <div className={styles.item3}>
                            <div onMouseEnter={() => setText2(!isText2)} onMouseLeave={() => setText2(isText2)} className={styles.menu_icon}>
                                <Link href="/press">
                                    Пресс-центр
                                </Link>
                                <button onClick={() => setText2(!isText2)} className={`${styles.triangle} ${isText2 ? styles.isText2 : ''}`}></button>
                            </div>
                            {isText2 && <div className={styles.dropdown} >
                                <div className={styles.dropContent2}>
                                    <Link href="/actions">
                                        События
                                    </Link>
                                    <Link href="/publick">
                                        Публикации
                                    </Link>
                                    <Link href="/new">
                                        Новинки
                                    </Link>
                                    <Link href="/calendar">
                                        Календарь выставок
                                    </Link>
                                </div>
                            </div>}

                        </div>
                        <span className={styles.line}></span>
                        <Link href="/faq">
                            Вопрос-ответ
                        </Link>
                        <span className={styles.line}></span>
                        <Link href="/contacts">
                            Контакты
                        </Link>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.translate}>
                            <Link href="/en">
                                Eng
                            </Link>
                        </div>
                        <button
                            className={styles.menu_button}
                            onClick={() => setOpenSaider((prev) => !prev)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setOpenSaider((prev) => !prev);
                                }
                            }}
                            tabIndex={0}
                        >
                            {isOpenSaider ?
                                null
                                : (<GiHamburgerMenu style={{ width: '40px', height: '40px' }} />)
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header