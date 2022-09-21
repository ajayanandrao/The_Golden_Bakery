import { map } from 'jquery'
import React from 'react'
import Form from './Form'

const NewForm = () => {

    const savedata = (newobject) => {
        const data ={
            ...newobject,
            id: Math.random().toString()
        };
        console.log(data);
    };
 

    return (
    <>
    
    <Form propfun={savedata}/>
    
    </>
  )
}

export default NewForm