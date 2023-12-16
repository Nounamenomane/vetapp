import React from 'react';
import styles from './NavToCatalog.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const NavToCatalog = () => {
  return (
    <div className={styles.main}>
      <div className={styles.creation}>
        <span>Производство ветеринарных препаратов</span>
      </div>
      <div className={styles.inner}>
        <Link className={styles.inner_right} href="/">
          <span>Ветеринарные препараты</span>
          <Image src="/imgs/arrow.svg" alt="arrow" width={25.69} height={59} />
        </Link>
        <Link className={styles.inner_left} href="/">
          <span>Корма и кормовые добавки</span>
          <Image src="/imgs/arrow.svg" alt="arrow" width={25.69} height={59} />
        </Link>
      </div>
    </div>
  );
};

export default NavToCatalog;
