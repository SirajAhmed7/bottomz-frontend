import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../css/Header.css"

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
    
  <div className="d-flex align-items-center" style={{background: `url('${process.env.PUBLIC_URL}/images/wave-haikei.png') no-repeat center/cover`, height: "250px" }}>
    <nav className="navbar navbar-expand navbar-light align-items-center headerback position-absolute w-100" style={{top: "0px"}}>
      <a className="navbar-brand text-white" style={{fontWeight: "800"}} href="/">BottmzUp.com</a>
      {/* <img src={process.env.PUBLIC_URL + "/images/doers-solutions-removebg-preview.png"} width="120" height="40" alt=""/> */}

      <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
        <ul className="navbar-nav ml-md-auto mr-2">
          <li className="nav-item active d-none d-md-block hover-underline-animation">
            <Link className="nav-link pb-0 ml-2 text-white" style={{fontSize: "19px"}} to="/all-clubs">Clubs</Link>
          </li>
          <li className="nav-item active d-none d-md-block hover-underline-animation">
            <Link className="nav-link pb-0 text-white" style={{fontSize: "19px"}} to="/all-events" >Events</Link>
          </li>
          <li className="nav-item active d-block hover-underline-animation">
            <a className="nav-link pb-0 text-white" style={{fontSize: "19px"}} href="/">Host With Us</a>
          </li>
          {/* <li className="nav-item active ">
            <a className="nav-link ml-2 ml-md-0 pb-0 hover-underline-animation" style={{fontWeight: "800", fontSize: "19px"}} href="/">Randomize</a>
          </li>
          <li className="nav-item active ">
            <a className="nav-link ml-2 ml-md-0 pb-0 hover-underline-animation" style={{fontWeight: "800", fontSize: "19px"}} href="/">Meet Cute</a>
          </li> */}
        </ul>
        <i className="bi bi-person-circle pt-2 ml-auto ml-md-0" onClick={()=>{navigate('/stranger-login')}}style={{fontSize: "25px"}}></i>
      </div>
    </nav>
    <div className='d-flex flex-column w-100'>
    <h5 className='d-flex justify-content-center text-white w-75 align-self-center text-center'>Lets give you a night to remember</h5>    
    <div className='w-100'>
      <form className="d-flex justify-content-center" role="search">
          <input className="form-control w-75" type="search" style={{height: "50px", border: "1px solid black"}} placeholder="Search Any Event, Club or Area.." aria-label="Search"/>
          <i className="bi bi-search position-relative" style={{float: "right", right: "30px", borderRadius: "20px", top: "15px", width: "0px"}}></i>   
      </form> 
    </div>
    </div>
  </div>
    </>
  )
}
