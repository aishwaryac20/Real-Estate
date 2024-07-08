import React from 'react';
import "./Home.css";
import AboutUs from './AboutUs';
import Services from './Services';
import PropertyListing from './PropertyListing';
import NeighborhoodGuides from './Neighborhoodguides';
import Articles from './Articles';
import Testimonials from './Testimonials';
import Contact from './Contact';

function HomePage() {
  return (
    <>
      <div className="home-page" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/4723250.jpg")', backgroundSize: 'cover', height: '100vh', position: 'relative' }}>

        <div className="container main-box" style={{ position: 'absolute', top: '30%', left: '8%', transform: 'translate(-50%, -50%)', width:'1300px', paddingLeft:'50px'}}>
          <div className="row justify-content-center">
            <div className="col-md-6 mt-5">

              <div className="cards  bg-transparent location  " >
                <div className="card-body">
                  <h2 className="text-center mb-5 text-white">Search Properties</h2>
            
                  <form>
  <div className="form-group">
    <label htmlFor="location" className="text-white">Location</label>
    <input type="text" className="form-control" id="location" placeholder="Enter location" />
  </div>
  <div className="form-group">
    <label htmlFor="budget" className="text-white">Budget</label>
    <input type="number" className="form-control" id="budget" placeholder="Enter budget" />
  </div>
  <div className="form-group">
    <label htmlFor="bhk" className="text-white">BHK</label>
    <select id="bhk" className="form-control">
      <option value="1">1 BHK</option>
      <option value="2">2 BHK</option>
      <option value="3">3 BHK</option>
      <option value="4">4 BHK</option>
      <option value="5">5+ BHK</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary btn-block">Search</button>
</form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <PropertyListing />
      <NeighborhoodGuides />
      <Articles />
      <Testimonials />
      <Contact />
      
    </>
  );
}

export default HomePage;
