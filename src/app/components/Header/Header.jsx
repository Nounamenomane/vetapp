import Link from "next/link";
import scss from './Header.module.scss'

export default function Header() {
    return (
        <div className={scss.header}>
            <div className={scss.contacts_header}>
                <div className={scss.header_contacts_wrapper}>
                    <Link href='/email'>info@beleka.by</Link>
                    <Link href='/number'>+375 1713 70300</Link>
                </div>
            </div>
            <div className={scss.header_container}>
                <div className={scss.header_navigation}>
                    <div className={scss.header_logo}>
                        <img src='/imgs/logo.png' alt="" />
                        <img src='/imgs/gmp_logo.png' alt="" />
                    </div>
                    <ul className={scss.menu_list}>
                        <li className={scss.item1}>
                            <a href="/about">
                                <span>О компании</span>
                            </a>
                        </li>               <li className={scss.item1}>
                            <a href="/services">
                                <span>Услуги</span>
                            </a>
                        </li>               <li className={scss.item1}>
                            <a href="/catalog">
                                <span>Продукция</span>
                            </a>
                            {/* <div className="submenu">
                            <ul className={scss.menu_list2}>
                                <li className={scss.item2}>
                                    <a href{scss.item1}
                                </li>
                            </ul>
                        </div> */}
                        </li>               <li className={scss.item1}>
                            <a href="/dealers">
                                <span>Дистрибьюторы</span>
                            </a>
                        </li>               <li className={scss.item1}>
                            <a href="/press">
                                <span>Пресс-центр</span>
                            </a>
                        </li>               <li className={scss.item1}>
                            <a href="/faq">
                                <span>Вопрос-ответ</span>
                            </a>
                        </li>               <li className={scss.item1}>
                            <a href="/contacts">
                                <span>Контакты</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}