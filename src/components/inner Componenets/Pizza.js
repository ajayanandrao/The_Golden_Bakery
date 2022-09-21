import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/Services/Action';
import './Pizza.scss';
import Record from './pizza.json';
import Number from './num.json';
import { Link } from 'react-router-dom';
import { decrementNumber, incrementNumber } from '../../redux/Services/CouterAction';

const Pizza = () => {

    const [get, setGet] = useState([]);
    //   --------------------------------------------------UeseEffect---------------//
    useEffect(() => {
        const localjsonfile = async () => {
            const set = Record.map((record) => { return (record) })
            // console.log(set);
            setGet(set);
        };
        localjsonfile();
        ;
    }, [])
    // -----------------------------------------------------------------------------


    const dispatch = useDispatch();


    const handlAdd = (product) => {
        dispatch(increment(product));
    };
    //   ----------------END----------------------------------------------------


   


    return (
        <>
            {
                get.map((ok) => {
                    return (
                        <Fragment key={ok.id}>
                            <div className='pizza-bg-container'>
                                <div className='pizza-img' >
                                    <img src={ok.img} className="pizza-img" />
                                </div>
                                <div className='pizza-description'>
                                    <h2>{ok.name}</h2>
                                    <span>
                                        Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers and black olives
                                        <div className='price'>${ok.price}</div>
                                    </span>
                                </div>
                                <div className='pizza-btn-container'>
                                    <i className="fa-sharp fa-solid fa-plus" ></i>
                                    <div className='pizza-count'>
                                            0
                                    </div>
                                    <i className="fa-sharp fa-solid fa-minus" ></i>
                                </div>
                                <button className='btn btn-primary' onClick={() => { handlAdd(ok) }}>Cart</button>
                                {/* <button className='btn btn-primary my-2'>Buy</button> */}
                            </div>
                        </Fragment>

                    )
                })

            }
        </>
    )
}

export default Pizza