/* eslint-disable */
import React from 'react';
import styles from './Contacts.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>Контакты</div>
      <div className={styles.belek}>ООО «БЕЛЭКОТЕХНИКА»</div>
      <div className={styles.address}>
        пер. Промышленный, 9, г.п. Свислочь, Пуховичский р-н, Минская обл., 222823, Республика
        Беларусь
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>
          График личного приема граждан, ИП, юридических лиц и их представителей в ООО
          &quot;БЕЛЭКОТЕХНИКА&quot;
        </div>
        <div className={styles.main_contacts}>
          <span className={styles.phone}>Директор</span>
          <span className={styles.phone}>Фокин Сергей Викторович.</span>
          <span className={styles.phone}>День приема: 2-й вторник месяца.</span>
          <span className={styles.phone}>Время приема: 13:00 - 16:00.</span>
          <span className={styles.phone}>Предварительная запись:</span>
          <span className={styles.phone}>+375 1713 70-300.</span>
        </div>
        <div className={styles.link}>
          <Link href="/">info@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Ветеринарная аптека (розничная торговля)</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            Время работы:
            <span className={styles.phone}>8.30 - 16.30</span>
          </div>
          <div className={styles.inner}>
            Обед:
            <span className={styles.phone}>12.00 - 13.00</span>
          </div>
          <div className={styles.inner}>
            Выходные дни:
            <span className={styles.phone}>суббота-воскресенье</span>
          </div>
          <div className={styles.pad}>
            <span className={styles.phone}>и праздничные дни</span>
          </div>
          <div className={styles.inner}>
            телефоны:
            <span className={styles.phone}>+375 1713 70-315</span>
          </div>
          <span className={styles.phone}>+375 29 609-41-00</span>
        </div>
        <div className={styles.link}>
          <Link href="/">marketing@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Отдел экспорта</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            тел./факс:
            <p className={styles.phone_long}>
              +375 1713 70-316 +375 1713 70-317 +375 1713 70-318 +375 1713 70-319 +375 1713 70-320
              +375 1713 70-321
            </p>
          </div>
          <div className={styles.inner}>
            Viber,Telegram,WhatsApp:
            <span className={styles.phone}>+375 29 650-51-45</span>
          </div>
        </div>
        <div className={styles.link}>
          <Link href="/">tat.korn@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Отдел материально- технического снабжения</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            телефоны:
            <span className={styles.phone}>+375 1713 70-327</span>
          </div>
          <span className={styles.phone}>+375 29 181-18-72</span>
        </div>
        <div className={styles.link}>
          <Link href="/">Andrei.Leonchenko@beleko.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Отдел сбыта</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            тел/факс:
            <span className={styles.phone}>+375 1713 70-327</span>
          </div>
          <span className={styles.phone}>+375 29 181-18-72</span>
        </div>
        <div className={styles.link}>
          <Link href="/">8513778@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Отдел маркетинга</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            телефоны:
            <span className={styles.phone}>+375 1713 70-315</span>
          </div>
          <span className={styles.phone}>+375 29 609-41-00</span>
          <span className={styles.phone}>+375 29 116-40-16</span>
        </div>
        <div className={styles.link}>
          <Link href="/">marketing@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Отдел кадров</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            тел/факс:
            <span className={styles.phone}>+375 1713 70-302</span>
          </div>
        </div>
        <div className={styles.link}>
          <Link href="/">info@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_text}>Приемная</div>
        <div className={styles.main_contacts}>
          <div className={styles.inner}>
            тел/факс:
            <span className={styles.phone}>+375 1713 70-300</span>
          </div>
        </div>
        <div className={styles.link}>
          <Link href="/">info@beleka.by</Link>
        </div>
      </div>

      <div className={styles.main_q_a}>
        <span className={styles.q_a}>Напишите нам сообщение или задайте вопрос</span>
        <div className={styles.main_inner}>
          <div className={styles.form_group}>
            <label className={styles.label_text}>
              Ваше имя <span className={styles.star}>&nbsp;*</span>
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
            <label className={styles.label_text}>
              Сообщение <span className={styles.star}>&nbsp;*</span>
            </label>
            <div className={styles.input_question}>
              <input type="text" required />
            </div>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label_text_cap}>
              Защита от автоматических сообщений <span className={styles.star}>&nbsp;*</span>
            </label>
            <div className={styles.captcha}>
              <Image src="/imgs/captcha.png" alt="arrow" width={174} height={38}/>
              <input type="text" required />
            </div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <Link href="/">
              я даю свое согласие на обработку моих персональных данных, в соответствии с Законом
              Республики Беларусь от 7 мая 2021 г. №99-З «О защите персональных данных», на условиях
              и для целей, определенных в Согласии на обработку персональных данных.
            </Link>
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

export default Contacts;
