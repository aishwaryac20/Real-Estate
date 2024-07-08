import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Home.css'

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">

        <span style={{display:"flex",justifyContent:"center",color:"white"}}> @realestate.com</span>
        <div  style={{display:"flex",flexDirection:"row",justifyContent:'center'}} >
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          
        </div>
      
    </footer>
  );
}

export default Footer;
