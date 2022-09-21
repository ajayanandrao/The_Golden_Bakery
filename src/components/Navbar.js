import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {

  const items = useSelector((state)=> state.card)

  return (
    <>
    
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Golden</Link>

   <Link className='like' to="/cart">
   <span className="icon-container">
      <span className="icon-text">
         {items.length}
      </span>
    <i className="bi bi-cart-check-fill"></i>
    </span>
   </Link>

    {/* <i class="fa-sharp fa-solid fa-cart-shopping"></i> */}
    <i className="bi bi-person-fill"></i>
    {/* <i class="bi bi-person-circle"></i> */}

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
      {/* <i class="fa-sharp fa-solid fa-cart-shopping"></i> */}
      <form className="d-flex" role="search">
        
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar