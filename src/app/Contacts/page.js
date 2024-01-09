import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Contacts from './Contacts';

export const metadata = {
  title: 'Contacts',
};
function page() {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/Contacts', breadcrumb: 'Контакты' },
  ];

  return (
    <div className="contacts">
      <Header />
      <div className="line"></div>
      <Breadcrumbs crumbs={breadcrumbs} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default page;
