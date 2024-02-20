import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_menu}>
                    <Link href='/About'>O компании</Link>
                    <Link href='/Service'>Услуги</Link>
                    <div className={styles.dropmenu}>
                        <Link href='/Production'>Продукция</Link>
                        <div>
                            <Link href='/Production'>Ветеринарные препараты</Link>
                            <Link href='/Production'>Кормовые добавки и комбикорма</Link>
                        </div>
                    </div>
                    <Link href='/dealers'>Дистрибьюторы</Link>
                    <div className={styles.dropmenu}>
                        <Link href='/press'>Пресс-центр</Link>
                        <div>
                            <Link href='/press'>События</Link>
                            <Link href='/press'>Публикации</Link>
                            <Link href='/press'>Новинки</Link>
                            <Link href='/press'>Календарь выставок</Link>
                        </div>
                    </div>
                    <div className={styles.contant_2}>
                        <Link href='/Faq'>Вопрос-ответ</Link>
                        <Link href='/Contacts'>Контакты</Link>
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
                                <Link href='https://www.youtube.com/channel/UC_f6Vrcbt3QPQdsByT9-_zA'>
                                    <button>
                                        <img src="/imgs/youtube.png" alt="youtube mesenger" />
                                    </button>
                                </Link>
                                <Link href='https://www.facebook.com/'>
                                    <button>
                                        <img src="/imgs/facebook.png" alt="facebook mesenger" />
                                    </button>
                                </Link>
                                <Link href='https://ok.ru/group/54399166382320'>
                                    <button>
                                        <img src="/imgs/odno.png" alt="odnoclassniki mesenger" />
                                    </button>
                                </Link>

                                <Link href='https://www.linkedin.com/'>
                                    <button>
                                        <img src="/imgs/Link.png" alt="Link mesenger" />
                                    </button>
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