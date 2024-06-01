import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/netflix-logo.png'
import Search from '../../assets/searchlogo.png'
import Profile from '../../assets/profile.png'   
import Bell from '../../assets/bell.png' 
import Caret from '../../assets/caret-down.png'                        
const Navbar = () => {
  const navRef= useRef();
  useEffect(()=>{
    window.addEventListener('scroll',() =>{
      if (window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.add('nav-dark')
      }
    })
  },[])
  return (
    <div className='navbar'>
      <div className="navbarleft">
      <img src={Logo} alt=""className='logo' />
      <ul>
        <li>Home</li>
        <li>TV shows</li>
        <li>Movies</li>
        <li>New&popular</li>
        <li>Mylist</li>
        <li>Browse by Languages</li>
      </ul>
      </div>
      <div className="navbarright">
      <img src={Search} alt="searchicon" className='icons' />
      <p>Children</p>
      <img src={Bell} alt="profileicon"  className='icons'/>
      <div className="navbar-profile">
      <img src={Profile} alt="profileicon" className='profile' />
      <img src={Caret} alt="profileicon" className='caret-icons' /> 
      <div className="dropdown">SignOut</div>
      </div>
      
       
      </div>
      
    </div>
  )
}

export default Navbar
