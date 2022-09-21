import React from 'react'
import "./Address.scss";
import addressBg from '../img/b/hand-2.jpg';

const Address = () => {

    const bg = {
        backgroundImage: `url(${addressBg})`
    }

    return (
        <>

            <div className='address-bg-container' style={bg}>
                <div className='black'>
                <div className='address-text-container'>
                    <h1>The <span style={{color:'gold'}}>Golden Bakery</span></h1>
                </div>
                <div className='address-line'>
                    250 South 300 East,
                    Salt Lake City Parbhani, MH 431401,
                    IND
                    (801) 328-3330
                    GoldenBakery@gamil.com
                </div>
                </div>
            </div>

        </>
    )
}

export default Address