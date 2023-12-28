import React from 'react'
import Header from '../components/Header/Header'
import ServicesBlock from '../componentsService/ServicesBlock/ServicesBlock'
import Footer from '../components/Footer/Footer'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


export const metadata = {
    title: "ServicePage",
};

const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/service', breadcrumb: 'Услуги' },
];

function Service() {
    return (
        <div className='serivce'>
            <Header />
            <div className="line"></div>
            <Breadcrumbs crumbs={breadcrumbs} />
            <ServicesBlock />
            <Footer />
        </div>
    )
}

export default Service