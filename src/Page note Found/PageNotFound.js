import React from 'react'
import './PageNotFound.scss';
import g from '../img/videos/g2.gif';

const PageNotFound = () => {

const bg = {
    backgroundImage:`url(${g})`,
}

    return (
        <>
           <div className="animations-bg" style={bg}>
           <div className="text-ani">
                <div>ERROR</div>
                <h1>404</h1>
                <hr />
                <div>Page Not Found</div>
            </div>

            <div className="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" className="src" />
            </div>

           </div>
        </>
    )
}
export default PageNotFound