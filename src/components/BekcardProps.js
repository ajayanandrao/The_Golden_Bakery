import React from 'react'
import './BekcardProps.scss';

import h from '../img/b/cake.jpg';
import Bekcard from './Bekcard';
import p from  '../img/b/biscuit2.jpg';
import B from  '../img/b/b.jpg';
import C from  '../img/b/cr.jpg';
import L from  '../img/b/l.jpg';
import Piza from  '../img/b/pizza.jpg';
import { Link } from 'react-router-dom';




const BekcardProps = () => {
    
    const Cake={
        backgroundImage: `url(${h})`
    }
    const Biscuit={
        backgroundImage: `url(${p})`
    }
    const Bread={
        backgroundImage: `url(${B})`
    }
    const Croissants={
        backgroundImage: `url(${C})`
    }
    const Lollipop={
        backgroundImage: `url(${L})`
    }
    const Pizza={
        backgroundImage: `url(${Piza})`
    }

    const l = <Link to="/Pizza/" className='btn btn-primary'></Link>;
    
  return (
<>
<div className='co'>
   <div className="grid-div">


   <Link className='link'  to="/all"> <Bekcard img={Pizza} title="Pizza" btn={l}/></Link>
   <Bekcard img={Biscuit} title="Biscuit" btn={l}/>
   
    <Bekcard img={Bread} title="Bread"/>
   
    <Bekcard img={Croissants} title="Croissants"/>
   
    <Bekcard img={Lollipop} title="Lollipop"/>
   
    <Bekcard img={Cake} title="Cake"/>
   
   </div>
   </div>
</>
    )
}

export default BekcardProps