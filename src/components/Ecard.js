import React from 'react'
import './Ecard.scss';

const Ecard = (props) => {

  return (  
<>
<div className='e-card-container'>
    <div className='e-card-inner'>
    <div className='e'>
    <div className='e-name'>{props.cardTitle}</div>
    <div className='e-card-inner-btn'>
        <button className='btn btn-primary my-3'>{props.btnName}</button>
        </div>
    </div>
    
     </div>
     
</div>

</>
  )
}

export default Ecard