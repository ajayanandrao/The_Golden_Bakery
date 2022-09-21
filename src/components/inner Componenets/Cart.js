import React, { Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../redux/Services/Action';
import './Pizza.scss';


const Cart = () => {


    const added = useSelector((state) => state.card)

    const dispatch = useDispatch();

    const removeHandlar = (remoitem) => {
        dispatch(decrement(remoitem))
    }



    return (

        <>
            


            {
                added.map((data) => {

                    return (
                        <Fragment key={data.id}>
                                    <div className='pizza-bg-container'>
                                        <div className='pizza-img' >
                                            <img src={data.img} className="pizza-img" />
                                        </div>
                                        <div className='pizza-description'>
                                            <h2>{data.name}</h2>
                                            <span>
                                                Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers and black olives
                                                <div className='price'>${data.price}</div>
                                            </span>
                                        </div>
                                        <div className='pizza-btn-container'>
                                            <i className="fa-sharp fa-solid fa-plus"></i>
                                            <div className='pizza-count'>
                                                {/* {count} */}
                                            </div>
                                            <i className="fa-sharp fa-solid fa-minus"></i>
                                        </div>
                                        <button className='btn btn-primary' onClick={() => removeHandlar(data.id)} >remove</button>
                                        {/* <button className='btn btn-primary my-2'>Buy</button> */}
                                    </div>

                        </Fragment>
                    )
                })
            }

        </>
    )
}

export default Cart