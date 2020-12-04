import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/SearchbyLocation/Search/Search';
import CardComponent from '../components/SearchbyLocation/CardComponent/CardComponent';
import WeeklyComponent from '../components/SearchbyLocation/WeeklyComponent/WeeklyComponent';
import PlacestoVisit from '../components/SearchbyLocation/PlacestoVisit/PlacestoVisit';
import NearbyLocations from '../components/SearchbyLocation/NearbyLocations/NearbyLocations';
import PreviouslyVisit from '../components/SearchbyLocation/PreviouslyVisit/PreviouslyVisit';
import illustration1 from '../assets/Illustrations/undraw_travelers_qlt1.svg';
import { FiSearch } from "react-icons/fi";
import Footer from '../components/Footer/Footer';

function SearchbyLocation() {
  return (
    <div className="searchbylocation">
        <Header />
        <Search />
        <CardComponent />
        <WeeklyComponent />
        <PlacestoVisit />
        <NearbyLocations />
        <PreviouslyVisit />
        <div className="banner">
          <div className="content">
            <div className="desc">
              <h1 style={{fontWeight:'bold', color: 'white'}}>Planning a Trip?</h1>
              <h3 style={{color: 'white', marginTop: 10, marginBottom: 20}}>Want to know which of the places are having your favourite weather currently?</h3>
              <h4 style={{color: 'white'}}>Have a look at the top tourist places filtered by weather.</h4>
              <div className="desc" style={{alignItems: 'center', marginTop: 20, width: 700}}>
                <a href="/search-by-weather" class="button bor"><FiSearch /> Search by Weather!</a>
              </div>
            </div>
            <img src={illustration1} alt="illustration" style={{height: 250, width: 250}}></img>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default SearchbyLocation;
