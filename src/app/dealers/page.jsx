'use client'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import scss from './DealersPage.module.scss'
import { useEffect } from 'react';
import { Map, Placemark, RulerControl, TypeSelector, YMaps, ZoomControl } from '@pbe/react-yandex-maps'


function Page() {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/dealers', breadcrumb: 'Дистрибьюторы' },
];
  useEffect(() => {
  }, []);
  const [zoom, setZoom] = useState(9);
  const [data, setData] = useState([
    {
      name: "Азербайджан",
      address: "Минор ООО Азербайджан, Баку, Насиминский р-н, ул.20 Января 18",
      number: ['+994(012) 570-04-82'],
      fillialsLength: 1,
      siteMarshut:'vuqardoc@mail.ru',
      coordinates: [40.414437843767004, 49.81267013514785]
    },
    {
      name: "Казахстан, Кыргызстан, Таджикистан, Узбекистан",
      address: "Представительство в странах Центральной Азии Белека-Азия Кыргызская Республика, Бишкек, ул. Байтик Баатыра, 98, БЦ VEFA, блок Б, 7-й этаж, каб. 304.",
      number: ['+996 (777) 70-33-12', '+996 (555) 70-33-12'],
      fillialsLength: 1,
      siteMarshut: 'asia@beleka.by',
      coordinates: [42.85780009543841, 74.60993824844013]    
    },
    {
      name: "Грузия",
      address: "	Агроветсервис+ ООО Грузия, Тбилиси, пр. К.Цамебули 73",
      number: ['+995 (32) 270-79-17' , '+995 (59) 163-76-80'],
      fillialsLength: 1,
      siteMarshut: 'veterinary.info@mail.ru',
      coordinates:[41.68584328239061, 44.84998252408884]
    }
  ])


  const [selectedOption, setSelectedOption] = useState('')
  const [selectedObject, setSelectedObject] = useState(data[1])
  const handleSelectChange = (e) => {
    const selectedText = e.target.options[e.target.selectedIndex].text
    setSelectedOption(selectedText);
    console.log('Выбранный текст:', selectedText);
    const foundObject = data.find(item => item.name === selectedText);
    setSelectedObject(foundObject)
  }
  const [isDisplay, setDisplay] = useState(false)
  const [mapCenter, setMapCenter] = useState(selectedObject.coordinates)
  const handlePlacemarkClick = (event) => {
    const placemarkGeometry = event.originalEvent.target.geometry.getCoordinates();
    setMapCenter(placemarkGeometry);
    setDisplay(!isDisplay)
  };
  return (
    <div>
        <Header/>
        <Breadcrumbs crumbs={breadcrumbs}/>
        <div className={scss.maps}>
          <div className={scss.mapHeader}>
            <select onChange={handleSelectChange}>
              <option value="Tajikistan, Kazakhstan, Kyrgyzstan">Казахстан, Кыргызстан, Таджикистан, Узбекистан</option>
              <option value="Azerbaijan">Азербайджан</option>
              <option value="Gruzia">Грузия</option>
            </select>
          </div>
        <YMaps>
          <div style={{ width: '100%', aspectRatio: "2.3 / 1" }}>
            <Map defaultState={{ center: mapCenter, zoom: zoom }} width="100%" height="100%">
              <Placemark 
                geometry={selectedObject.coordinates} 
                onClick={handlePlacemarkClick} 
                options={{ draggable: true }}
                properties={{ balloonContent: 'Нажмите на метку' }}
              />
              <ZoomControl options={{ float: "right" }} />
              <TypeSelector options={{ float: "right" }} />
              <RulerControl options={{ float: "right" }} />
            </Map>
          </div>
        </YMaps>
            {isDisplay && (
            <div className={scss.markInfo}>
              <div>
                <p>{selectedObject.name}</p>
                <button onClick={() => setDisplay(!isDisplay)}>×</button>
              </div>
              <div>
                <b>Address:</b>
                <span>{selectedObject.address}</span>
                <b>Phone</b>
                <span>{selectedObject.number[0]}</span>
                    <span>{selectedObject.number[1]}</span>
                <b>E-mail:</b>
                <span>{selectedObject.siteMarshut}</span>

              </div>
            </div>
          )}
        </div>
        <div className={scss.mapsInfo}>
          <span>{selectedObject.name}</span>
          <span>{selectedObject.address}</span>
          <div>
            <span>{selectedObject.number[0]}</span>
            <span>{selectedObject.number[1]}</span>
            <span>{selectedObject.siteMarshut}</span>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Page