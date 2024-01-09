import React from 'react';
import Header from '../components/Header/Header';
import FaqBlock from './FaqBlock';
import Footer from '../components/Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export const metadata = {
  title: "Faq",
};
function Faq() {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/Faq', breadcrumb: 'Вопрос-ответ' },
];
  return (
    <>
      <Header />
      <div className="line"></div>
      <Breadcrumbs crumbs={breadcrumbs}/>
      <FaqBlock />
      <Footer />
    </>
  );
}

export default Faq;
