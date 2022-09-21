import React from 'react'
import './Bekcard.scss';

const Bekcard = (props) => {

    

    return (
    <>

        <div className="card-bg" style={props.img}>
            <div className='inner-bg-black'>
                <div className='text-container'>
                    <div className='title'><h2>{props.title}</h2></div>
                    <div className='description'>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </div>
                    
                    
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Bekcard