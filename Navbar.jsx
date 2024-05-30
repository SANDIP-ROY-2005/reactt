import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/navbar.css";
 

 
const Navbar = () => {
  return (
    <nav> 
      <div className="logo">  
         <img src="../img/ccabgr.png"  ></img>
      </div>
      <div className="navbar"> 
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/" ><h2>WEATHER APP</h2></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/todo" ><h2>CRUD</h2></NavLink>
        </div>
        
        </nav>
  )
}

export default Navbar
