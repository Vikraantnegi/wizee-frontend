import React from 'react';
import Header from '../components/Header/Header';
import '../HelperStyles.css';
import illustration1 from '../assets/Illustrations/working.svg';
import IDCard from '../components/IDCard/IDCard';
import image from '../assets/images/p1.jpg';
import Footer from '../components/Footer/Footer';

function AboutUsScreen() {
  return (
    <div className="aboutus-screen">
      <Header name="About Us" />
      <div className="backgroundimageee">
        <h1 style={{color: 'white', fontSize: 84}}>About Us</h1>
      </div>
      <div className="mw1100 Flexrow Flexbetween FlexAligncenter">
        <div className="col-6 Flexcolumn">
          <h3>We are a group of Pre-Final year students of Thapar Institute of Engineering, pursuing Bachelor of Engineering in Computer Engineering. Wizee, a Weather Forecast cum Tour Guide is a project for Software Engineering.</h3>
        </div>
        <img src={illustration1} alt="illustration" style={{height: 300, width: 300}}></img>
      </div>
      <div className="Flexcolumn mw1100">
        <div className="Flexcolumn Flexcenter FlexAligncenter">
          <h1>Meet our team</h1>
        </div>
        <div className="Flexcolumn">
          <div className="Flexrow Flexbetween">
            <IDCard name="Gagan Singhal" type="BackEnd Developer" src={image} />
            <IDCard name="Rahul Anand" type="BackEnd Developer" src={image} />
          </div>
          <div className="Flexrow Flexbetween">
            <IDCard name="Dhairya Ahuja" type="Database Manager" src={image} />
            <IDCard name="Vikrant Negi" type="FrontEnd Developer" src={image} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsScreen;
