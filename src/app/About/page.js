import React from 'react'
import Header from '../components/Header/Header'
import AboutCompany from '../components/About/AboutCompany'
import Footer from '../components/Footer/Footer'


export const metadata = {
    title: "AboutPage",
};

function About() {
    return (
        <div className='about'>
            <Header />
            <div className="line"></div>
            <AboutCompany />
            <Footer />
        </div>
    )
}

export default About