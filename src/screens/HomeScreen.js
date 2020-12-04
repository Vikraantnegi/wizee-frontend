import React from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Services from '../components/services/Services';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import '../HelperStyles.css';
import Footer from '../components/Footer/Footer';

function HomeScreen() {
  return (
    <div className="#home-screen">
      <Header />
      <Home />
      <Services />
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default HomeScreen;
