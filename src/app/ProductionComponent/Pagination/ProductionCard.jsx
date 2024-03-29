import React from 'react';
import styles from './Pagination.module.scss';
import Link from 'next/link';

function ProductionCard({ isCard }) {
    return (
        <div className={styles.productionCard}>
            {isCard.map((card, i) => (
                <div className={styles.sliderInfo} key={card.id}>
                    <Link href={`Detail/${card.id}`} passHref>
                        <div className={styles.preparats}>
                            <img src='/imgs/Klamovetin.jpg' alt='Klamovetin' />
                        </div>
                    </Link>
                    <div className={styles.info}>
                        <h1>{card.name}</h1>
                        <p>Суспензия для инъекций</p>
                        <div className={styles.animals}>
                            <img src="/imgs/paginate/ram.png" alt="ram" />
                            <img src="/imgs/paginate/cow.png" alt="cow" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductionCard;
