import React, { useRef, useEffect } from 'react';
import styles from './ModalWindow.module.scss';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

function ModalWindow({ isOpenModal, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpenModal) {
            modalRef.current.focus();
        }
    }, [isOpenModal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Вставьте код для обработки отправки формы
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div>
            {isOpenModal && (
                <div
                    className={styles.modal}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    ref={modalRef}
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription"
                >
                    <div className={styles.title}>
                        <h1 id="modalTitle">Заказать товар</h1>
                        <img
                            onClick={onClose}
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNzg3IDFMNSAzLjc4NyAyLjIxMyAxIDEgMi4yMTMgMy43ODcgNSAxIDcuNzg3IDIuMjEzIDkgNSA2LjIxMyA3Ljc4NyA5IDkgNy43ODcgNi4yMTMgNSA5IDIuMjEzIiBmaWxsPSIjOTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                            alt=""
                        />
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.text}>
                            <label htmlFor="name">имя</label>
                            <input type="text" id="name" placeholder='Александр' />
                        </div>
                        <div className={styles.text}>
                            <label htmlFor="email">e-mail</label>
                            <input type="email" id="email" placeholder='example@mailservice.com' />
                        </div>
                        <div className={styles.text}>
                            <label htmlFor="phone">Телефон</label>
                            <input type="tel" id="phone" placeholder='+375-(ХХ)-ХХХ-ХХ-ХХ' />
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" id="consent" />
                            <p>я даю свое согласие на обработку моих персональных данных,
                                в соответствии с Законом Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных»,
                                на условиях и для целей, определенных в <br /> <Link href='/'>Согласии на обработку персональных данных.</Link></p>
                        </div>
                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
                        <button type='submit' className={styles.btn}>
                            Заказать
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ModalWindow;
