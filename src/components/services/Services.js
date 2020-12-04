import {React} from 'react';
import './Services.css';
import { FiSearch } from "react-icons/fi";

import Location from '../../assets/Illustrations/undraw_traveling_t8y2.svg';
import Weather from '../../assets/Illustrations/undraw_weather_notification_4sbo.svg';

function Services(){
    return(
        <div id="services-section">
            <div id="tab-container">
                <h2 class="tab-heading">What we Offer?</h2>
                <ul class="nav nav-tabs tabview" id="myTab2" role="tablist" style={{border: 'none'}}>
                    <li class="nav-item">
                        <a class="nav-link active" id="cgann-tab" data-toggle="tab" href="#cgann" role="tab" aria-controls="cgann" aria-selected="true">Search by Location</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="mnist-tab" data-toggle="tab" href="#mnist" role="tab" aria-controls="mnist" aria-selected="false"> Search by Weather </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="cgann" role="tabpanel" aria-labelledby="cgann-tab">
                        <div class="d-flex">
                            <div class="col-lg-6" style={{flexDirection: "column"}}>
                                <p class="mb_40">Are you worried about the weather around the places you wanna visit soon? Do you find it a hassle to search different websites for locations and weather around them? Don't worry, we got you covered about it all. Just type in a location and let us take you to an immersive and informative journey about the weather and sightseeing in and around your preferred location like never before.</p>
                                <a href="/search-by-location" class="button"><FiSearch /> Search by Location!</a>
                            </div>
                            <div class="col-lg-4 ml-auto" style={{marginTop: -60}}>
                                <img class="illus" src={Location} height="350" width="350" alt="Location" />
                            </div>
                        </div> 
                    </div>
                    <div class="tab-pane fade" id="mnist" role="tabpanel" aria-labelledby="mnist-tab">
                        <div class="d-flex">
                            <div class="col-lg-6" style={{flexDirection: "column"}}>
                                <p class="mb_40">Have you ever wanted to travel to a place with a specific weather instead of a specific location? Have you ever searched for places with snowfall or places with rains? We provide you with a free to use service to do just this. Just type in a weather type you'd like to experience and we will suggest you the places where the weather is exactly how you want it to be. Try it for yourself now for a unique experience.</p>
                                <a href="/search-by-weather" class="button"><FiSearch /> Search by Weather!</a>
                            </div>
                            <div class="col-lg-4 ml-auto" style={{marginTop: -60}}>
                                <img class="illus" src={Weather} height="350" width="350" alt="Weather"/>
                            </div>
                        </div>                             
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;