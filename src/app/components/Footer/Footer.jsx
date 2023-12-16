import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_menu}>
                    <Link href='/'>O компании</Link>
                    <Link href='/'>Услуги</Link>
                    <div className={styles.dropmenu}>
                        <Link href=''>Продукция</Link>
                        <div>
                            <Link href='/'>Ветеринарные препараты</Link>
                            <Link href='/'>Кормовые добавки и комбикорма</Link>
                        </div>
                    </div>
                    <Link href='/'>Дистрибьюторы</Link>
                    <div className={styles.dropmenu}>
                        <Link href='/'>Пресс-центр</Link>
                        <div>
                            <Link href='/'>События</Link>
                            <Link href='/'>Публикации</Link>
                            <Link href='/'>Новинки</Link>
                            <Link href='/'>Календарь выставок</Link>
                        </div>
                    </div>
                    <div className={styles.contant_2}>
                        <Link href='/'>Вопрос-ответ</Link>
                        <Link href='/'>Контакты</Link>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footer_info}>
                    <div className={styles.footer_title}>
                        <div className={styles.footer_date}>
                            <p>© 2023 ООО «БЕЛЭКОТЕХНИКА»</p>
                            <div>
                                <Link href='/'>Карта сайта</Link>
                                <Link href='/'>Закрытый раздел</Link>
                            </div>
                        </div>
                        <div className={styles.footer_contacts}>
                            <Link href='/'>+375 1713 70-300</Link>
                            <Link href='/'>e-mail: info@beleka.by</Link>
                        </div>
                    </div>
                    <div className={styles.footer_icon}>
                        <div className={styles.icon_search}>
                            <div className={styles.messenger}>
                                <Link href='/'>
                                    <button>
                                        <img src="/imgs/youtube.png" alt="youtube mesenger" />
                                    </button>
                                </Link>
                                <Link href='/'>
                                    <button>
                                        <img src="/imgs/facebook.svg" alt="facebook mesenger" />
                                    </button>
                                </Link>
                                <Link href='/'>
                                    <button>
                                        <img src="/imgs/odno.svg" alt="odnoclassniki mesenger" />
                                    </button>
                                </Link>
                                <Link href='/'>
                                    <img src="/imgs/Link.svg" alt="Link mesenger" />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.input_search}>
                            <input placeholder='Поиск по сайту' type="text" />
                            <div className={styles.search}>
                                <img src="/imgs/search.png" alt="search input" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_custom}>
                        <img src="/imgs/image.png" alt="custom studio" />
                        <p>Создание сайта </p>
                        <Link href='/'>Студия Борового</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer