import React from 'react'
import './Login.css'
import logo from '../../assets/netflix-logo.png'
import { useNavigate } from 'react-router-dom';

const login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className='login'>
      <img src={logo} className='loginlogo' />
      <div>
      <div className="loginform">
      <h1>Welcome</h1>
        <button onClick={handleClick}>Login into netflix</button>
      </div>
     
      </div>
    </div>
  )
}

export default login
