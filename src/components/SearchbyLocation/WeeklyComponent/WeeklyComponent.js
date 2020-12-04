import {React} from 'react';
import './WeeklyComponent.css';
import DailyData from '../../../assets/Data Files/SearchByLocation/DailyData';
import DailyFeed from './DailyFeed/DailyFeed';

function WeeklyComponent(){
    return(
        <div id="weekly-section">
            <div className="weather-cards">
                <h1 style={{fontWeight: 'bold', marginBottom: 20}}>5 Days Forecast</h1>
                <div className="cards">
                    {DailyData.map(day => (
                        <DailyFeed key={day.sr} day={day.day} animationData={day.animationData} date={day.date} max={day.max} min={day.min} weather={day.weather} desc={day.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeeklyComponent;