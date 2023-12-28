import React from 'react'
import Header from '../components/Header/Header'
import AboutCompany from '../components/About/AboutCompany'
import Footer from '../components/Footer/Footer'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export const metadata = {
    title: "AboutPage",
};
function About() {

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        { pathname: '/about', breadcrumb: 'О компании' },
    ];

    return (
        <div className='about'>
            <Header />
            <div className="line"></div>
            <Breadcrumbs crumbs={breadcrumbs} />
            <AboutCompany />
            <Footer />
        </div>
    )
}

export default About