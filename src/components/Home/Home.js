import {React} from 'react';
import './Home.css';
import illustration1 from '../../assets/Illustrations/undraw_camping_noc8.svg'

function Home(){
    return(
        <div id="home-section">
            <div className="container">
                <div className="home-content">
                    <h1 className="h1">Looking for a vacation?</h1>
                    <h3 className="h3">Confused about the Weather?</h3>
                    <h5 className="h5">Well no more! We are here to provide you <br/> every single detail about the weather of any place!</h5>
                </div>
                <div className="buttons">
                    <a href="#tab-container" className="button">Get to know more!</a>
                </div>
            </div>
            <img src={illustration1} alt="illustration" style={{height: 650, width: 650}}></img>
        </div>
    );
}

export default Home;