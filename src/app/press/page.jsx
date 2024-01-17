'use client'
import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import scss from './PressCenterPage.module.scss'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import EventsBlock from './EventsBlockComp/EventsBlock';
import PublicationsBlock from './PublicationsBlockComp/PublicationsBlock';
import CalendarOfExhibitionsBlock from './CalendarOfExhibitionsBlockComp/CalendarOfExhibitionsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { onMenuClick } from '../redux/mainSlice';
import NewItemsBlock from './NewItemsBlockComp/NewItemsBlock';




function PressCenterPage() {

  useEffect(()=> {
    fetch('https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      return response.json();
    })
    .then(data => {
      setCards(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }, [])
  
  const menuArray = ['События', 'Публикации', 'Новинки', 'Календарь-выставок']
  

  const [cards, setCards] = useState([])
  const [maxCard, setMaxCard] = useState(12)
  const PaginateCards = cards?.slice(maxCard-12, maxCard)

  
  const handlePageChange= (OnPageNumber) => {
    const newNumberMax = OnPageNumber*12
    setMaxCard(newNumberMax)
  } 
  const dispatch = useDispatch()
  const { clickedMenu } = useSelector((state) => state.main)
  const handelMenuChange = (el) => {
    dispatch(onMenuClick(el))
  }

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/press', breadcrumb: 'Пресс-центр' },
    { pathname: '/events', breadcrumb: clickedMenu }
  ] ;


  return (
    <div>
      <Header/>
      <Breadcrumbs crumbs={breadcrumbs}/>
      <section className={scss.container}>
        <div>
          {
            menuArray?.map((el, index)=> (
              el === clickedMenu
              ? 
              <p key={index}>{el}</p>
              :
              <button 
                key={index} 
                onClick={() => handelMenuChange(el)}

              >{el}</button>
            ))
          }
        </div>
        {
          clickedMenu === 'События'
          ?
          <EventsBlock 
            cards={cards}
            PaginateCards={PaginateCards}
            handlePageChange={handlePageChange}
          />
          :
          clickedMenu === 'Публикации'
          ?
          <PublicationsBlock 
            cards={cards}
            PaginateCards={PaginateCards}
            handlePageChange={handlePageChange}
          />
          :
          clickedMenu === 'Новинки'
          ?
          <NewItemsBlock
            cards={cards}
            PaginateCards={PaginateCards}
            handlePageChange={handlePageChange}
          />
          :
          clickedMenu === 'Календарь-выставок'
          ?
          <CalendarOfExhibitionsBlock/>
          :
          'Список пуст'
        }
      </section>
      <Footer/>
    </div>
  )
}

export default PressCenterPage