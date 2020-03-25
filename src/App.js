import React from 'react';
import Menu from './components/Menu/Menu';
import SliderBlock from './components/Slider/SliderBlock';
import Service from './components/Service/Service';
import Company from './components/Company/Company';
import Footer from './components/Footer/Footer';
import FooterMobile from './components/FooterForMobile/FooterMobile';
import MenuMobile from './components/MenuMobile/MenuMobile';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './styles.css';


function App() {
  return (
    <div className="container">
      <Menu/>
      <MenuMobile/>
      <SliderBlock/>
      <Service/>
      <Company/>
      <Footer/>
      <FooterMobile/>
    </div>
  );
}

export default App;
