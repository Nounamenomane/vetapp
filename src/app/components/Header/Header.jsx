'use client'
import React, { useRef, useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { useClickOutside } from './hooks/useClickOutside';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { onMenuClick } from '../../redux/mainSlice';

function Header({ onSidebarItemClick }) {
    const [isOpenSaider, setOpenSaider] = useState(false)

    const [isText1, setText1] = useState(false)
    const [isText2, setText2] = useState(false)
    const [isText3, setText3] = useState(false)
    const [isText4, setText4] = useState(false)

    const menuRef = useRef(null)
    useClickOutside(menuRef, () => setOpenSaider(false))

    const router = useRouter()

    const dispatch = useDispatch()

    const pressCenterMenuCLick = (e) => {
        dispatch(onMenuClick(e.target.innerText))
        router.push('/press')
    }

    return (
        <div className={styles.header}>
            <div className={styles.contacts_header}>
                <Link href='/email'>info@beleka.by</Link>
                <Link href='/number'>+375 1713 70300</Link>
            </div>
            <div className={styles.header_container} >
                <div className={styles.header_navigation}>
                    <div className={styles.header_logo}>
                        <Link href='/'>
                            <img className={styles.logo} src='/imgs/logo.png' alt="logo page" />
                        </Link>
                        <Link href="/">
                            <img className={styles.logo} src='/imgs/gmp_logo.png' alt="logo gmp" />
                        </Link>
                    </div>
                    <div className={`${styles.menu_list} ${isOpenSaider ? styles.active : ''}`} ref={menuRef}>
                        <Link href="/About">
                            О нас
                        </Link>
                        <span className={styles.line}></span>
                        <Link href="/Service">
                            Услуги
                        </Link>
                        <span className={styles.line}></span>
                        <div className={styles.item3}>
                            <div onMouseEnter={() => setText1(!isText1)} onMouseLeave={() => setText1(isText1)} className={styles.menu_icon}>
                                <Link href="/Production">
                                    Продукция
                                </Link>
                                <button onClick={() => setText1(!isText1)} className={`${styles.triangle} ${isText1 ? styles.isText1 : ''}`}></button>
                            </div>
                            {isText1 &&
                                <div className={styles.dropdown} >
                                    <div className={styles.dropContent}>
                                        <div className={styles.menu_icon}>
                                            <Link onClick={() => onSidebarItemClick('Ветеренарные препараты')} href='/Production'>
                                                Ветеринарные препараты
                                            </Link>
                                            <button onClick={() => setText3(!isText3)} className={`${styles.triangle} ${isText3 ? styles.isText3 : ''}`}></button>
                                        </div>
                                        {isText3 && <div className={styles.menuContect}>
                                            <Link onClick={() => onSidebarItemClick('Акушерско-гинекологические препараты')} href='/Production'>Акушерско-гинекологические препараты</Link>
                                            <Link onClick={() => onSidebarItemClick('Антибактериальные препараты')} href='/Production'>Антибактериальные препараты</Link>
                                            <Link onClick={() => onSidebarItemClick('Нестероидные противовоспалительные средства')} href='/Production'>Нестероидные противовоспалительные средства</Link>
                                            <Link onClick={() => onSidebarItemClick('Препараты для профилактики и лечения заболеваний вымени')} href='/Production'>Препараты для профилактики и лечения заболеваний вымени</Link>
                                            <Link onClick={() => onSidebarItemClick('Препараты для профилактики и лечения нарушений обмена веществ')} href='/Production'>Препараты для профилактики и лечения нарушений обмена веществ</Link>
                                            <Link onClick={() => onSidebarItemClick('Противопаразитарные противопротозойные препараты')} href='/Production'>Противопаразитарные противопротозойные препараты</Link>
                                            <Link onClick={() => onSidebarItemClick('Прочие препараты')} href='/Production'>Прочие препараты</Link>
                                            <Link onClick={() => onSidebarItemClick('Средства для наружного применения')} href='/Production'>Средства для наружного применения</Link>
                                        </div>}
                                        <span className={styles.line}></span>
                                        <div className={styles.menu_icon}>
                                            <Link onClick={() => onSidebarItemClick('Кормовые добавки и комбикорма')} href='/Production'>
                                                Кормовые добавки и
                                                комбикорма
                                            </Link>
                                            <button onClick={() => setText4(!isText4)} className={`${styles.triangle} ${isText4 ? styles.isText4 : ''}`}></button>
                                        </div>
                                        {isText4 && <div className={styles.menuContect}>
                                            <Link onClick={() => onSidebarItemClick('Белково-витаминно-минеральные добавки')} href='/Production'>Белково-витаминно-минеральные добавки</Link>
                                            <Link onClick={() => onSidebarItemClick('Брикет-лизунец')} href='/Production'>Брикет-лизунец</Link>
                                            <Link onClick={() => onSidebarItemClick('Витаминно-минеральные добавки')} href='/Production'>Витаминно-минеральные добавки</Link>
                                            <Link onClick={() => onSidebarItemClick('Гепатопротектор')} href='/Production'>Гепатопротектор</Link>
                                            <Link onClick={() => onSidebarItemClick('Заменители цельного молока')} href='/Production'>Заменители цельного молока</Link>
                                            <Link onClick={() => onSidebarItemClick('Комбикорма')} href='/Production'>Комбикорма</Link>
                                            <Link onClick={() => onSidebarItemClick('Лизунцы мелассированные')} href='/Production'>Лизунцы мелассированные</Link>
                                            <Link onClick={() => onSidebarItemClick('Подкислитель/дезинфектант')} href='/Production'>Подкислитель/дезинфектант</Link>
                                            <Link onClick={() => onSidebarItemClick('Премиксы')} href='/Production'>Премиксы</Link>
                                            <Link onClick={() => onSidebarItemClick('Прикормки рыболовные')} href='/Production'>Прикормки рыболовные</Link>
                                            <Link onClick={() => onSidebarItemClick('Раскислитель кормов (буфер)')} href='/Production'>Раскислитель кормов (буфер)</Link>
                                            <Link onClick={() => onSidebarItemClick('Энергетические добавки')} href='/Production'>Энергетические добавки</Link>
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
                                    <button onClick={pressCenterMenuCLick}>
                                        События
                                    </button>
                                    <button onClick={pressCenterMenuCLick}>
                                        Публикации
                                    </button>
                                    <button onClick={pressCenterMenuCLick}>
                                        Новинки
                                    </button>
                                    <button onClick={pressCenterMenuCLick}>
                                        Календарь-выставок
                                    </button>
                                </div>
                            </div>}

                        </div>
                        <span className={styles.line}></span>
                        <Link href="/Faq">
                            Вопрос-ответ
                        </Link>
                        <span className={styles.line}></span>
                        <Link href="/Contacts">
                            Контакты
                        </Link>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.right}>
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