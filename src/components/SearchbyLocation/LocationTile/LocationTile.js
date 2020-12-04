import {React} from 'react';
import '../WeeklyComponent/WeeklyComponent.css';
import '../WeeklyComponent/DailyFeed/DailyFeed.css';
import Lottie from 'react-lottie';

function LocationTile({name, state, animationData, weather, max, src}){
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
            <div className="Flexcolumn FlexBetween borderbox p20 grow" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url(${src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300, width: 185 }}>
                <div className="Flexcolumn">
                    <h5 style={{color: 'white', marginBottom: 0}}>{name}</h5>
                    <h6 style={{fontSize: 12, color: 'white'}}>{state}</h6>                            
                </div>
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
                <div className="Flexcolumn">
                    <h1 style={{color: 'white', textAlign: 'right', marginBottom: 0}}>{max}&deg;</h1>
                </div>
            </div>
        </div>
    );
}

export default LocationTile;