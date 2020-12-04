/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Header from '../components/Header/Header';
import '../HelperStyles.css';
import img1 from '../assets/images/contact-icon-phone.png';
import img2 from '../assets/images/contact-icon-mail.png';
import img3 from '../assets/images/contact-icon-pin.png';
import Footer from '../components/Footer/Footer';

function ContactUsScreen() {
    const contact = [{
        sr : 1,
        name : 'Phone',
        data : '+91 659-657-0133',
        src : img1
    }, {
        sr : 2,
        name : 'Mail ID',
        data : 'contactsupport@wizee.com',
        src : img2
    }, {
        sr : 3,
        name : 'Address',
        data : '#91, ABC Street, XYZ City - 1340XX',
        src : img3
    }]
  return (
    <div className="contactus-screen">
      <Header name="Contact Us" />
      <div className="backgroundimageee">
        <h1 style={{color: 'white', fontSize: 84}}>Contact Us</h1>
      </div>
      <div className="mw1100 Flexrow Flexbetween">
        <div className="col-6 Flexcolumn">
          <div className="col-10">
            <h4 style={{fontSize: 20}}>Keep track of what's happening with your data, change permissions, and run reports against your data
              anywhere in the world. Keep track of what's happening with your data, change permissions.</h4>
          </div>
          {contact.map(data => (
            <div key={data.sr} className="col-12 Flexrow FlexAligncenter mv20">
                <div className="p10 mr20">
                    <img src={data.src} alt="img" />
                </div>
                <div className="Flexcolumn">
                    <p style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>{data.name}</p>
                    <p style={{fontSize: 16, color: 'black'}}>{data.data}</p>
                </div>
            </div>
          ))}
        </div>
        <div class="col-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110180.85645369274!2d76.33901351030379!3d30.34663648463799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028935a3313df%3A0xd5bc56ad3b90bc7f!2sPatiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1606827079571!5m2!1sen!2sin" className="responsive-iframe" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsScreen;
