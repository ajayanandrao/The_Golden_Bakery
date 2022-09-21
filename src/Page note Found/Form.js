// import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
import './Form.scss';

const Form = (props) => {

    const [name,setName] = useState('');

    const onChangeBtn = (e) => {
        setName(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        const data ={
            title: name,
        }
        props.propfun(data);
        setName('');
    };

    return (
        <>
        
           <div className='container d-flex justify-content-center flex-column my-5'>
                        
            <form onSubmit={submit}>
            {/* <h1>{name}</h1> */}
            
                <input className='form-control w-25' value={name} type="text" placeholder="Name" onChange={onChangeBtn}/>
                <button type="submit" className='btn btn-primary my-2'>submit</button>
            </form>
            
            </div>

        </>
    )
}

export default Form