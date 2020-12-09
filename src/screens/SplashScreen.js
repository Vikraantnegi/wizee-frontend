import {React, useEffect, useState} from 'react';
import '../HelperStyles.css';
import splashlogo from '../assets/images/logo2.png';
import HeaderSplash from '../components/Header/Header-Splash/Header-Splash';
import {Card, Button} from 'react-bootstrap';
import { setItem, getItem } from '../utility/localStorageControl';

function SplashScreen() {
  useEffect(() => {
    setItem('idToken', '');
  })
  return (
    <div className="splash">
      <HeaderSplash />
      <div className="inner-container-splash">
        <Card style={{ width: '18rem', backgroundColor: 'inherit', borderWidth: 0, marginTop: 120}}>
          <Card.Img variant="top" src={splashlogo} />
          <Card.Body style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 20}}>
            <Card.Title style={{color: 'white', fontWeight: 'bold'}}>A Weather Application</Card.Title>
            <Card.Text style={{color: 'white', paddingTop: 10}}>
              Helping you find the best place and time to travel.
            </Card.Text>
              <Button href="/signup" style={{margin: 10, marginLeft: 0, marginRight: 0}} variant="primary">Sign Up for Free!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SplashScreen;
