import {React, useEffect, useState} from 'react';
import './WeatherComponent.css';
import {Button} from 'react-bootstrap';
import TopPlacesData from '../../../assets/Data Files/SearchByWeather/TopPlacesData';
import TopSnowyData from '../../../assets/Data Files/SearchByWeather/TopSnowyData';
import LocationTile from '../../SearchbyLocation/LocationTile/LocationTile';
import CardComponent from '../../SearchbyLocation/CardComponent/CardComponent';
import DailyFeed from '../../SearchByWeather/DailyFeed/DailyFeed';
import CurrentData from '../../../assets/Data Files/SearchByWeather/CurrentData';
import TopRainyData from '../../../assets/Data Files/SearchByWeather/TopRainyData';
import TopClearData from '../../../assets/Data Files/SearchByWeather/TopClearData';
import TopCloudyData from '../../../assets/Data Files/SearchByWeather/TopCloudyData';
import TopSunnyData from '../../../assets/Data Files/SearchByWeather/TopSunnyData';

function WeatherComponent(){
    const [current, setcurrent] = useState('');
    const [weather, setweather] = useState('rainy');

    function CurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            window.alert("Error");
        }
        return true;
    }

    function showPosition(position) {

        var request = require('request');

        var apiKey = '084f341703e2b716e147335a1203957c';
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`

        request(url, function (err, response, body) {
            if (err) {
                console.log('error:', err);
            } else {
                var weather = JSON.parse(body)
                setcurrent(weather.name);
            }
        });


        //var location = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude;
        //window.alert(location);
    }

    useEffect(() =>{
        CurrentLocation();
        setweather('');
    },[]);

    let Weatherdata = '';

    if(weather === 'snowy'){
        Weatherdata = TopSnowyData;
    } else if(weather === 'rainy'){
        Weatherdata = TopRainyData;
    } else if(weather === 'clear'){
        Weatherdata = TopClearData;
    } else if(weather === 'cloudy'){
        Weatherdata = TopCloudyData;
    } else if(weather === 'sunny'){
        Weatherdata = TopSunnyData;
    } else {
        Weatherdata = TopPlacesData;
    }

    return(
        <div id="weather-section">
            <div id="button-section">
                <Button variant="outline-primary" onClick={() => setweather('snowy')}>Snowy</Button>
                <Button variant="outline-secondary" onClick={() => setweather('rainy')}>Rainy</Button>
                <Button variant="outline-success" onClick={() => setweather('clear')}>Clear</Button>
                <Button variant="outline-warning" onClick={() => setweather('cloudy')}>Cloudy</Button>
                <Button variant="outline-danger" onClick={() => setweather('sunny')}>Sunny</Button>
            </div>
            {current.length > 0 & weather.length === 0  ? (
                <div style={{flex : 1}}>
                    <CardComponent />
                    {CurrentData.map(current => (
                        <div className="Current-cards">
                            <div className="forecast">
                                <h1 style={{marginBottom: 20, fontWeight: 'bold', textAlign: 'center'}}>3 Days Forecast</h1>
                                <div className="cards">
                                    {current.daily.map(day => (
                                        <DailyFeed key={day.sr} day={day.day} animationData={day.animationData} date={day.date} max={day.max} min={day.min} weather={day.weather} desc={day.desc} />
                                    ))}
                                </div>
                            </div>
                            <div className="forecast">
                                <h1 style={{marginBottom: 20, fontWeight: 'bold', textAlign: 'center'}}>Nearby</h1>
                                <div className="cards">
                                    {current.nearby.map(place => (
                                        <LocationTile key={place.sr} name={place.name} state={place.state} src={place.src} animationData={place.animationData} weather={place.weather} max={place.max} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
            <div id="location-cards">
                {Weatherdata.map(location => (
                    <div className="weather-cards">
                        <h1 style={{fontWeight: 'bold'}}>{location.title}</h1>
                        <h3 style={{marginBottom: 20}}>{location.subtitle}</h3>
                        <div className="cards">
                            {location.location.map(place => (
                                <LocationTile key={place.sr} name={place.name} state={place.state} src={place.src} animationData={place.animationData} weather={place.weather} max={place.max} />
                            ))}
                        </div>
                    </div>
                ))}              
            </div>
        </div>
    );
}

export default WeatherComponent;