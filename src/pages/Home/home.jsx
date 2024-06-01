import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Banner from '../../assets/bro.jpg'
import Banners from '../../assets/bro 2.png'
import Play from '../../assets/play.png'
import info from '../../assets/info.png'
import Titlecard from '../../components/Titlecards/Titlecard.jsx'
import Footer from '../../components/Footer/Footer.jsx'
const home = () => {
  return (
    <div className='home'>
     <Navbar/>
     <div className="hero">
      <img src={Banner} alt="bromvbanner" className='banner-img' />
      <div className="caption">
        <img src={Banners} alt="" className='title' />
        <p>Following a fatal accident, a selfish young man finds himself being given a second chance to fix his mistakes and turn his life around after making a bargain with Titan, the God of Time.</p>
        <div className='btn'>
          <button className='playbtn'><img src={Play} alt="" />Play</button>
          <button className="infobtn"><img src={info} alt="" />More info</button>
        </div>
        </div>   
     </div>
     <Titlecard title={"Blockbuster"}/>
     <Titlecard title={"only on netflix"}/>
     <Titlecard title={"upcoming"}/>
     <Titlecard title={"comingsoon"}/>
     <Footer/>
    </div>
  )
}

export default home


