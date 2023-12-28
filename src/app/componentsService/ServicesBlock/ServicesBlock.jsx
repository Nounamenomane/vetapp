import React from 'react';
import styles from './ServicesBlock.module.scss';
import Link from 'next/link';

function ServicesBlock() {
    return (
        <div className={styles.servicesBlock}>
            <h1>Услуги</h1>
            <div className={styles.servicesBlock_info}>
                <div>
                    <b>Компания &quot;Белэкотехника&quot; предлагает контрактное производство:</b>
                    <p>1. Ветеринарных препаратов</p>
                    <p>2. Престартерных и стартерных комбикормов</p>
                    <p>3. Премиксов</p>
                    <p>4. Витаминно-минеральных добавок</p>
                    <p>5. Белково-витаминно-минеральных добавок</p>
                    <p>6. Витаминно-минеральных смесей</p>
                </div>
                <div>
                    <b>Оказываем услуги по смешиванию кормовых добавок.</b>
                    <p>Имеющееся оборудование и наличие аккредитованной лаборатории позволяет производить высококачественную продукцию</p>
                    <div className={styles.phone_number}>
                        <p>Подробную информацию о данных услугах вы можете получить по телефонам:</p>
                        <Link href="/"> +375 1713 70-315, +375 29 609-41-00</Link>
                    </div>
                    <div className={styles.email}>
                        <p>E-mail:</p>
                        <Link href="/">olga.davidova@beleka.by</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesBlock;
