import {React} from 'react';
import './DailyFeed.css';
import Lottie from 'react-lottie';

function DailyFeed({day, date, weather, min, desc, max, animationData}){
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData : animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return(
        <div id="daily-feed">
            <div className="Flexcolumn borderbox p20 grow" style={{height: 300, width: 185}}>
                {weather === 'Rainy' ? (
                        <Lottie options={defaultOptions} style={{marginBottom: 10}} />
                    ) :
                    weather === 'Sunny' ? (
                        <Lottie options={defaultOptions} style={{marginBottom: 10}} />
                    ) :
                    weather === 'Snowy' ? (
                        <Lottie options={defaultOptions} style={{marginBottom: 10}} />
                    ) : 
                    weather === 'Cloudy'? (
                        <Lottie options={defaultOptions} style={{marginBottom: 10}} />
                    ) : (
                        <Lottie options={defaultOptions} style={{marginBottom: 10}} />
                    )
                }
                <p style={{fontWeight: 'bold', textAlign: 'center', fontSize: 16, marginBottom: 10}}>{weather}</p>
                <div className="Flexrow FlexBetween FlexCenter">
                    <div className="Flexcolumn">
                        <p style={{fontWeight: 'bold', fontSize: 14, marginBottom: 5}}>{day}</p>
                        <p style={{fontSize: 14, marginBottom: 5}}>{date}</p>
                    </div>
                    <div className="Flexcolumn">
                        <p style={{fontWeight: 'bold', fontSize: 14, marginBottom: 5}}>{max}&deg;c</p>
                        <p style={{fontWeight: 'bold', fontSize: 14, marginBottom: 5}}>{min}&deg;c</p>
                    </div>
                </div>
                <p style={{fontSize: 10, textAlign: 'center'}}>{desc}</p>
            </div>
        </div>
    );
}

export default DailyFeed;