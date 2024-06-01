import React from 'react'
import './Footer.css'
import Facebook from '../../assets/facebook.png'
import Insta from '../../assets/insta.png'
import Twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footericons">
     <img src={Facebook} alt="" />
     <img src={Insta} alt="" />
     <img src={Twitter}alt="" /> 
     <img src={Youtube} alt="" />
     </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li> Gift Cards</li>
      <li>investor Relations</li>
      <li>Jobs</li>
      <li>Terms and Conditions</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookies Infromation</li>
      <li>Corporate Information</li>
      <li>Media Center</li>
      <li>Contactus</li>
    </ul>
    <p className="copywrite">©1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
