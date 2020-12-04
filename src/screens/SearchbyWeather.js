import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/SearchByWeather/Search/Search';
import WeatherComponent from '../components/SearchByWeather/WeatherComponent/WeatherComponent';
import illustration1 from '../assets/Illustrations/undraw_travelers_qlt1.svg';
import { FiSearch } from "react-icons/fi";
import Footer from '../components/Footer/Footer';

function SearchbyWeather() {
  return (
    <div className="searchbyweather">
        <Header />
        <Search />
        <WeatherComponent />
        <div className="banner">
          <div className="content">
            <div className="desc">
              <h1 style={{fontWeight:'bold', color: 'white'}}>Planning a Trip?</h1>
              <h3 style={{color: 'white', marginTop: 10, marginBottom: 20}}>Have a perfect place in your mind for the vacation?</h3>
              <h4 style={{color: 'white'}}>Have a look at the weather of that perfect place.</h4>
              <div className="desc" style={{alignItems: 'center', marginTop: 20, width: 700}}>
                <a href="/search-by-location" class="button bor"><FiSearch /> Search by Location!</a>
              </div>
            </div>
            <img src={illustration1} alt="illustration" style={{height: 250, width: 250}}></img>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default SearchbyWeather;
