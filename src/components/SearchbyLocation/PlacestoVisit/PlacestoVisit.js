import {React} from 'react';
import '../WeeklyComponent/WeeklyComponent.css';
import '../WeeklyComponent/DailyFeed/DailyFeed.css';
import LocationData from '../../../assets/Data Files/SearchByLocation/LocationData';

function PlacestoVisit(){
    return(
        <div id="weekly-section">
            <div className="weather-cards">
            <h1 style={{fontWeight: 'bold'}}>Planning a Visit?</h1>
            <h3 style={{marginBottom: 20}}>Here are some top 5 places you can visit.</h3>
                <div className="cards">
                {LocationData.map(place => (
                    <div key={place.sr} id="daily-feed">
                        <div className="Flexcolumn Flexend borderbox p20 grow" style={{height: 190, width: 190, backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url(${place.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <h5 style={{color: 'white', marginBottom: 0}}>{place.name}</h5>
                            <h6 style={{marginBottom: 20, color: 'white', fontSize: 12}}>{place.desc}</h6>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default PlacestoVisit;