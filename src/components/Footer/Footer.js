import {React} from 'react';
import './Footer.css';

function Footer(){

    return (
        <footer className="footer">
            <div className="Flexcolumn mw1100">
                <div className="col-12 Flexrow mb20">
                    <h2 class="footer__logo">Wizee</h2>
                </div>
                <div className="Flexrow mb10">                    
                    <div class="col-4 footer__addr">
                        <h4>Contact Us</h4>
                        <p>
                            #91, ABC Street, XYZ City - 1340XX<br />
                            <a className="footer__btn btn" href="mailto:example@gmail.com">Email Us</a>
                        </p>
                    </div>
                    <ul className="col-8 Flexrow">
                        <li className="col-4">
                            <h4>Screens</h4>
                            <li className="mb10">
                                <a className="footlink" href="/home">Home</a>
                            </li>
                            <li className="mb10">
                                <a className="footlink" href="/about">About Us</a>
                            </li>
                            <li className="mb10">
                                <a className="footlink" href="/contact">Contact Us</a>
                            </li>
                        </li>
                        <li className="col-4">
                            <h4>Services</h4>
                            <li className="mb10">
                                <a className="footlink" href="/search-by-location">Search by Location</a>
                            </li>
                            <li className="mb10">
                                <a className="footlink" href="/search-by-weather">Search by Weather</a>
                            </li>
                        </li>
                        <li className="col-4">
                            <h4>Policies</h4>
                            <li className="mb10"> 
                                <a className="footlink" href="/home">Terms & Condiions</a>
                            </li>
                            <li className="mb10">
                                <a className="footlink" href="/about">Privacy Policy</a>
                            </li>
                            <li className="mb10">
                                <a className="footlink" href="/contact">Meet the Team</a>
                            </li>
                        </li>
                    </ul>
                </div>
                <div className="Flexrow Flexcenter">
                    <p>&copy; 2020. All rights reserved to Wizee.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;