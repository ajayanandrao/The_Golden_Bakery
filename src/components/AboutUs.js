import React from 'react'
import './AboutUs.scss';
import abi from '../img/b/hand.jpg';

const AboutUs = () => {

    const abimg={
        backgroundImage:`url(${abi})`,
    }

    return (
        <>
                <div className="aboutus-container">
                  
                  <div style={abimg} className="aboutus-card"></div>
                    <div className='textarea'>
                    <h1>Our Mission</h1>
                    It all began in 2003 with two friends from business school who shared a sweet tooth and a dream of baking. 12 years later, we bake all of our products on-site, filling our 1940's - style stores with the delicious smells of fresh cakes and pies to bring back that delightful, warm feeling of Grandma’s kitchen.
                    </div>
                  </div>
                
        </>
    )
}

export default AboutUs