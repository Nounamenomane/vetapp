'use client'
import styles from './DetailProductInfi.module.scss'
import ModalWindow from './ModalWindow'
import { useState, useRef } from 'react'
import { useClickOutside } from './hooks/useClickOutside'

function DetailProductInfi({ isProduct }) {

    const [isOpenModal, setOpenModal] = useState(false)


    const menuRef = useRef(null)
    useClickOutside(menuRef, () => setOpenModal(false))

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleBuyButtonClick = () => {
        setOpenModal(!isOpenModal);
    };

    const handleBuyButtonKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleBuyButtonClick();
        }
    };
    return (
        <div className={styles.info}>
            <div className={styles.info_title}>
                <img src='https://beleka.by/upload/resize_cache/iblock/8b1/315_315_040cd750bba9870f18aada2478b24840a/Albendazol-10_-BT.jpg' alt="" />
                <div className={styles.info_title_right}>
                    <h1>{isProduct.name}</h1>
                    <img src="/imgs/Icon.svg" alt="" />
                    <p>Раствор для инъекций.</p>
                    {isOpenModal && <div className={styles.overlay} />}
                    <div className={styles.turnModal} ref={menuRef}>
                        {isOpenModal && <ModalWindow isOpenModal={isOpenModal} onClose={handleCloseModal} />}
                        <button
                            className={styles.btn}
                            onClick={handleBuyButtonClick}
                            onKeyPress={handleBuyButtonKeyPress}
                            tabIndex={0}
                        >
                            Купить в Беларуси
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.detail_info_link}>
                <p>Входящие в состав препарата компоненты обладают дезинтоксикационными, противовоспалительными,
                    десенсибилизирующими и метаболотропными свойствами, положительно влияют на функции эндокринной и иммунной
                    систем. </p>
                <div className={styles.detail_info_product} >
                    <div>
                        <h1>Состав</h1>
                        <p>В 1 мл раствора для инъекций содержится: 200 мг натрия
                            тиосульфата, 22 мг натрия глутамата, вспомогательные вещества и
                            растворитель. </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h1>Применение</h1>
                        <p>АМКЛОМАСТ DC применяют для одномоментного запуска
                            и лечения коров при маститах в сухостойный период, вызванными микроорганизмами чувствительными к компонентам препарата.
                            Препарат вводят внутрицистернально
                            по 5 г (содержимое 1 шприца) в каждую долю вымени,
                            после последней дойки перед переводом в сухостойный период, но не позднее, чем за 49 суток до предполагаемого отела. </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h1>Период ожидания</h1>
                        <p>
                            Молоко - без ограничений после отела.
                            Мясо - через 30 дней после применения препарата. </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h1>Форма выпуска</h1>
                        <p>	Полимерные шприцы по 5 г </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h1>Срок годности</h1>
                        <p>	2 года от даты изготовления </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h1>Условия хранения</h1>
                        <p>	В упаковке предприятия - изготовителя при температуре от + 5 до + 25С </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProductInfi