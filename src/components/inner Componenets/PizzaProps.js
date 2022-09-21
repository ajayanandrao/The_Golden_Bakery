import React from 'react'
import './PizzaProps.scss';


import b from '../../img/Types/pizza-20.jpg';

const PizzaProps = () => {
    const banner ={
        backgroundImage: `url(${b})`
    }

   
    
  return (
<>

<div className="pizza-add-container" style={banner}>
    <div className="banner-title">Pizza</div>
</div>


</>

    )
}

export default PizzaProps