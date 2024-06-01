import React from 'react'
import './Player.css'
import Backarrow from '../../assests/Backarrow.png'
const Player = () => {
  return (
    <div>
      <img src={Backarrow} alt="" />
      <iframe width='90%' height='90'
       src='https://www.youtube.com/watch?v=4UP0lI1awvU' 
       title= 'trailer' frameborder='0' allowFullScreen></iframe>
       <p>Publisteddate</p>
       <p>Name</p>
       <p>Type</p>
    </div>
  )
}

export default Player
