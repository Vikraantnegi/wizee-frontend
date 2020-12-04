import {React} from 'react';
import '../WeeklyComponent/WeeklyComponent.css';
import '../WeeklyComponent/DailyFeed/DailyFeed.css';
import NearbyLocation from '../../../assets/Data Files/SearchByLocation/NearbyLocation';
import LocationTile from '../LocationTile/LocationTile';

function NearbyLocations(){
    return(
        <div id="weekly-section">
        {NearbyLocation.map(location => (
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
    );
}

export default NearbyLocations;