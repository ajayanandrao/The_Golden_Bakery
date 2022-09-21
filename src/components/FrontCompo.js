import "./FrontCompo.scss";
import sample from "../img/videos/v.mp4";

const FrontCompo = () => {
    
 
return (
<>
{/* <Link className='link' to="/PagePiza"> */}
<div className="bg-container">

<video className="video" id="video" autoPlay loop muted><source src={sample}/>
</video>
{/* <div className="content">
    
</div> */}

<div className='text'>
    <h1 className='main-title-text'>The Golden Bakery</h1>
</div>

</div>
{/* </Link> */}
    



</>  
)
}

export default FrontCompo