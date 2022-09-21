
import Pizza from './Pizza';
import './PizzaProps.scss';

import { useDispatch} from 'react-redux';
import { increment } from '../../redux/Services/Action';
// import { useEffect } from 'react';

const ItemList = () => {



    
    const dispatch = useDispatch();

    // const reducerFile = useSelector((state)=>{
    //     return state["counter"]
    // });

        // const {count} = reducerFile;
        // const {count1} = reducerFile;
        // const {count2} = reducerFile;
        // const {count3} = reducerFile;

    // End //

const add = () =>{
    dispatch(increment());
    
};

// const add1 = () =>{
//     dispatch(increment1());
// };
// const add2 = () =>{
//     dispatch(increment2());
// };
// const add3 = () =>{
//     dispatch(increment3());
// };

// ----------------------------------

// const r = () =>{
//     dispatch(decrement());
// };
// const r1 = () =>{
//     dispatch(decrement1());
// };
// const r2 = () =>{
//     dispatch(decrement2());
// };
// const r3 = () =>{
//     dispatch(decrement3());
// };

// ------------------------------
    
// if(count < 0){
//     dispatch(increment());
// };

// if(count1 < 0){
//     dispatch(increment1());
// };
// if(count2 < 0){
//     dispatch(increment2());
// };
// if(count3 < 0){
//     dispatch(increment3());
// };

// -------------------------------

// =======================================================
 

    return (
    <>
            <div className="center">
                <div className='displayGrid'>
                    <Pizza />
                </div>
            </div>
    </>
    )
}

export default ItemList