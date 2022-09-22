// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart'
import './MainCart.scss';

const MainCart = () => {
    // const total = useSelector((state) => state.card)





    return (
        <>

            <div className="container">
                <div className='cart-container'>
                    <div className='cart-header'>
                        <h1 className='g-cart'>Golden Cart</h1>
                    </div>
                    <div className='cart-total'>
                        <span className='total-text me-5'>Total: $0</span>
                        <span className='cart-buy-text'>Buy</span>
                    </div>
                    <hr className='hr-cart' />

                    <div className='inner-container'>

                        <div className='displayGrid'>
                            <Cart />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MainCart