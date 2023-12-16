import React from 'react';
import styles from './NavToCatalog.module.scss';
import Link from 'next/link';


const NavToCatalog = () => {
  return (
    <div className={styles.main}>
      <div className={styles.creation}>
        <span>Производство ветеринарных препаратов</span>
      </div>
      <div className={styles.inner}>
        <Link className={styles.inner_right} href="/">
          <span>Ветеринарные препараты</span>
          <img src="/imgs/arrow.svg" alt="" />
        </Link>
        <Link className={styles.inner_left} href="/">
          <span>Корма и кормовые добавки</span>
          <img src="/imgs/arrow.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NavToCatalog;
