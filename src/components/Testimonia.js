import React from 'react'
import './Testimonia.scss';
import aj from '../img/skk.png';
import k from '../img/c1.png';
import a from '../img/a2.png';

const Testimonia = () => {
  return (

    <>
    <section className="testimonial text-center">
        <div className="container">

         
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide">
                            <img src={aj} className="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            {/* <h4>Client 1</h4> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src={k} className="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            {/* <h4>Client 2</h4> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src={a} className="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            {/* <h4>Client 3</h4> */}
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                <i className="fa-solid fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </section>


    
    </>

    )
}

export default Testimonia