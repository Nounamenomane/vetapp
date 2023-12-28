import React from 'react'
import Header from '../components/Header/Header'
import ServicesBlock from '../componentsService/ServicesBlock/ServicesBlock'
import Footer from '../components/Footer/Footer'


export const metadata = {
    title: "ServicePage",
};

function Service() {
    return (
        <div className='serivce'>
            <Header />
            <div className="line"></div>
            <ServicesBlock />
            <Footer />
        </div>
    )
}

export default Service