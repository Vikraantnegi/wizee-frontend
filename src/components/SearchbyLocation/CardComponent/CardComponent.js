import {React} from 'react';
import './CardComponent.css';
import Lottie from 'react-lottie';
import sunny from '../../../assets/Illustrations/sunnyweather.json';
import windspeed from '../../../assets/Illustrations/wind speed.json';
import humidity from '../../../assets/Illustrations/humidity.json';

function CardComponent(){
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData : sunny,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions1 = {
        loop: true,
        autoplay: true, 
        animationData : windspeed,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true, 
        animationData : humidity,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <div id="card-section">
            <div className="location-card">
                <div className="roww">
                    <div className="weather">
                        <div className="box">
                            <h1 className="temperature">49&deg;</h1>
                            <div className="types"><h6 className="temp">&deg;F</h6><h6 className="temp">|</h6><h6 className="temp">&deg;C</h6></div>
                        </div>
                        <div className="box1">
                            <h1 className="precipitation">3%</h1>
                            <h6 className="topic">Chances</h6>
                        </div>
                    </div>
                    <Lottie options={defaultOptions} style={{height: 200, width: 200, margin: 0, marginLeft: 'auto', position: 'relative', left: 40, bottom: 40}} />
                </div>
                <div className="roww">
                    <div className="weather">
                        <h1 className="location">Dalhousie</h1>
                        <h4 className="area">Himachal Pradesh, India</h4>
                        <h5 id='date'>as of Wednesday, 12:00 PM</h5>
                    </div>
                    <div className="details">
                        <div className='group'>
                        <Lottie options={defaultOptions1} style={{height: 50, width: 100, marginRight: 20}} />
                            <div className="secondary">
                                <h6 className='wind'>Wind Speed</h6>
                                <h4 id='wind'>3 mph</h4>
                            </div>
                        </div>
                        <div className='group'>
                        <Lottie options={defaultOptions2} style={{height: 50, width: 50, marginRight: 20}} />
                            <div className="secondary">
                                <h6 className='humidity'>Humidity</h6>
                                <h4 id='humidity'>52%</h4>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;