import React from 'react';
import './Search.css';

var request = require('request');
function Search() {
    class InputField extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loc: "",
            };
            this.handleLocationChange = this.handleLocationChange.bind(this);
            this.handleTypedLocation = this.handleTypedLocation.bind(this);
        }
        handleLocationChange(event) {
            this.setState({
                loc: event.target.value
            });
        }
        handleTypedLocation(event) {
            event.preventDefault();          
            var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(this.state.loc) + '.json?access_token=pk.eyJ1Ijoic2t5MTUwMiIsImEiOiJja2k0azNhZTI3bDMyMzVsNjIxbjV2aGljIn0.8PQCV9neMOCxwA8tyn3pug&limit=1';
            request(url, function (err, response, body) {
                if (err) {
                    console.log('error:', err);
                } else {
                    var weather = JSON.parse(body)
                    var lat = weather.features[0].center[1];
                    var long = weather.features[0].center[0];
                    findWeather(lat, long);
                }
            });
        }
        render() {
            return (
                <form onSubmit={this.handleTypedLocation}>
                    <input type="search" value={this.state.loc} onChange={this.handleLocationChange} />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>              
            );
        }
    }


    function CurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            window.alert("Error");
        }
        return true;
    }

    function findWeather(lat, long) {
        var apiKey = '084f341703e2b716e147335a1203957c'; 

        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

        request(url, function (err, response, body) {
            if (err) {
                console.log('error:', err);
            } else {
                var weather = JSON.parse(body)
                var message = `In ${weather.city.name}: \n`;
                var i = 0;
                for (; i < weather.list.length; i += 8) {
                    message += `It's ${weather.list[i].main.temp} degree celcius on ${weather.list[i].dt_txt}\n`;
                }
                
                window.alert(message);
            }
        });
    }
    function showPosition(position) {

        var coord = position.coords;
        var lat = coord.latitude;
        var long = coord.longitude;
        findWeather(lat, long);
    }
    
    return (
        <div id="search-section">
            <a class="button" onClick={CurrentLocation} style={{ marginRight: 40 }} >Use Current Location!</a>
            <InputField/>
        </div>
    );
    
}

export default Search;