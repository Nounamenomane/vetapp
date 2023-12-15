'use client'

import { useState, useEffect } from 'react';
import css from './PromoBlock.module.scss'

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(true);
  }, []); 
  return (
    <div className={css.videoContainer} >
      <div style={{ background: isLightMode ? 'none' : '#333', color: isLightMode ? '#333' : 'none', zIndex:isLightMode ? 0 : 4 }}></div>
      <div className={css.videoContent}>
        <div></div>
        <video className={css.videoCss} preload='auto' autoplay="autoplay" loop="loop" muted="muted" poster='https://beleka.by/local/templates/html_dev/video/beleka.jpg'>
          <source src='./videoPresintation.mp4' type='video/mp4'/>
        </video>
      </div>
      <div>
          <h2>Забота — это просто</h2>
          <p>
            Качественное сырье, проверенные поставщики и жесткий контроль на всех этапах технологического процесса. Мы любим свою работу и гордимся тем, что делаем!
				  </p>
          <div>

          <a href="//www.youtube.com/watch?v=a-xPJJH5Qug">
            <div className={css.triangle}></div>
              Видео призентация
          </a>
          </div>
        </div>

      
    </div>
  );
};

export default App;
