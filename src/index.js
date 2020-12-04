import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SignUp from './components/SignUp/SignUp';
import SearchByLocation from './screens/SearchbyLocation';
import Home from './screens/HomeScreen';
import SearchbyWeather from './screens/SearchbyWeather';
import AboutUsScreen from './screens/AboutUs';
import ContactUsScreen from './screens/ContactUs';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup">
                    <App/>
                    <SignUp/>
                </Route>
                <Route exact path="/search-by-location" component={SearchByLocation} />
                <Route exact path="/search-by-weather" component={SearchbyWeather} />
                <Route exact path="/about" component={AboutUsScreen} />
                <Route exact path="/contact" component={ContactUsScreen} />
                <Route exact path="/home" component={Home} /> 
            </Switch>
            
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
