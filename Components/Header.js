import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp } from 'react-icons/fa'; 


function NavBar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navigation'>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${isSticky ? 'sticky' : ''}`}>

      <div className="container me-auto mb-4 mb-lg-4  ">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="pagination">
            <div className='name'>
              <h3>Real Estate</h3>
              <hr className='underline'></hr>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About us</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/propertylisting">Propertylisting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/neighborhoodguides">Neighborhood Guides</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles">Articles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        
        <div className="call-whatsapp-icons">
          <a href="#" className="icon"><FaPhone /></a>
          <a href="#" className="icon"><FaWhatsapp /></a>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;

