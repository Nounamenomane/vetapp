/* eslint-disable */
import React from 'react';
import styles from './Faq.module.scss';

const FaqBlock = () => {
 
  return (
    <div className={styles.container}>
      
      <div className={styles.main}>
        <span className={styles.q_a}>Вопрос-ответ</span>
        <span className={styles.ask}>Задать вопрос:</span>

        <div className={styles.main_inner}>
          <div className={styles.form_group}>
            <label className={styles.label_text}>
              Имя <span className={styles.star}>&nbsp;*</span>
            </label>
            <div className={styles.input}>
              <input type="text" required />
            </div>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label_text}>
              Эл. почта <span className={styles.star}>&nbsp;*</span>
            </label>
            <div className={styles.input}>
              <input type="email" required />
            </div>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label_text}>Телефон</label>
            <div className={styles.input}>
              <input type="number" />
            </div>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label_text}>
              Вопрос <span className={styles.star}>&nbsp;*</span>
            </label>
            <div className={styles.input_question}>
              <input type="text" required />
            </div>
          </div>

          <div className={styles.send}>
            <div className={styles.btn}>
              <button>Отправить</button>
            </div>
            <div className={styles.send_text}>
              <span className={styles.star}>&nbsp;*</span>— поля обязательные к заполнению
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBlock;
