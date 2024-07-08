
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import PropertyListing from './Components/PropertyListing';
import Neighborhoodguides from './Components/Neighborhoodguides';
import Article from './Components/Articles';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import SearchProperty from './Components/SearchProperty'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
        <Route path='/' element={<SearchProperty />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/service' element={<Services />}></Route>  
        <Route path='/propertyListing' element={<PropertyListing />}></Route>  
        <Route path='/Neighborhoodguides' element={<Neighborhoodguides />}></Route> 
        <Route path='/articles' element={<Article />}></Route> 
        <Route path='/Testimonials' element={<Testimonials />}></Route> 
        <Route path='/Contact' element={<Contact />}></Route> 

        </Routes>

      </BrowserRouter>
      <Footer/>
    
    </>
  );
}
export default App;
