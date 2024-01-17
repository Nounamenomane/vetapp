'use client'
import { useEffect, useState } from 'react';
import scss from '../PressCenterPage.module.scss'
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import { useParams,useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { onMenuClick } from '../../redux/mainSlice';

function PressCenterPage() {
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    fetch(`https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1/${params.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        setCard(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, [])

  const dispatch = useDispatch()
  const { clickedMenu } = useSelector((state) => state.main)
  const handelMenuChange = (el) => {
    dispatch(onMenuClick(el))
    router.push('/press')
  }

  const menuArray = ['События', 'Публикации', 'Новинки', 'Календарь-выставок']

  const [card, setCard] = useState([])

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/press', breadcrumb: 'Пресс-центр' },
    { pathname: '/press', breadcrumb: clickedMenu },
    { pathname: '/press', breadcrumb: card.title },

    
  ];

  const handleKeyPressMenuChange = (event, el) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handelMenuChange(el);
    }
  };


  return (  
    <div>
      <Header />
      <Breadcrumbs crumbs={breadcrumbs} />
      <section className={scss.container}>
      <div>
          {
            menuArray?.map((el, index)=> (
              el === clickedMenu
              ? 
              <p key={index}>{el}</p>
              :
              <a 
                role="button"
                tabIndex={0}  
                key={index} 
                onClick={()=> handelMenuChange(el)}
                onKeyDown={() => handleKeyPressMenuChange(el)}

              >{el}</a>
            ))
          }
        </div>
        <div>
          <div className={scss.wrapper}>
            <h1>{card.title}</h1>
            <p>{card.date}</p>
            <div>
              <img src={card.image} alt="" />
              <p>{card.desc}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PressCenterPage