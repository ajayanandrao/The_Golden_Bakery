import React from 'react'
import AboutUs from './components/AboutUs'
import Address from './components/Address'
import BekcardProps from './components/BekcardProps'
import Footer from './components/Footer'
import FrontCompo from './components/FrontCompo'
import Testimonia from './components/Testimonia'

const Home = () => {
    return (

        <>
            <FrontCompo />
            <div className='main-bg'>
                <AboutUs />
                <BekcardProps />
                <Address />
                <Testimonia />
            </div>
            <Footer />
        </>


    )
}

export default Home