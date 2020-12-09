import {React, useState, useEffect} from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import splashlogo from '../../assets/images/favicon.png';
import { setItem, getItem } from '../../utility/localStorageControl';

function Header({name}){
    var width = window.innerWidth;    
    // var navitems = document.getElementsByClassName('navbar-nav')[0].children;
    // for ( let item = 0; item < navitems.length; item ++){
    //     if (name === navitems[item].innerHTML){
    //         navitems[item].className = 'nav-link active';
    //     }
    // }
    const [username, setname] = useState('');
    const [idToken, setToken] = useState('');
    const [picture, setimg] = useState('');

    const navi = () => {
        setItem('navigation', 'Hiii');
    }

    useEffect(() => {
        setToken(getItem('idToken'));
        setname(getItem('name'));
        setimg(getItem('img'));
    }, []);

    const [loggedin, setloggedin] = useState(false);
    return (
        <header className="header">
            <Navbar sticky="top" expand="lg" className="navbar">
                <Navbar.Brand href="/home">
                    <img src={splashlogo} width="50" height="50" className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home#home-screen">Home</Nav.Link>
                        <div class="dropdown nav-item">
                            <a aria-haspopup="true" aria-expanded="true" id="dropdown-menu-align-right" href="/home#services-section" class="dropdown-toggle nav-link" role="button">Services</a>
                            <div aria-labelledby="dropdown-menu-align-right" class="dropdown-menu" style={{margin: 0}}>
                                <a href="/search-by-location" class="dropdown-item">Search by Location</a>
                                {idToken.length > 0 ? (
                                    <a href="/search-by-weather" class="dropdown-item">Search by Weather</a>
                                ) : (
                                    <a href="/signup" class="dropdown-item" onClick={() => navi()}>Search by Weather</a>
                                )}
                            </div>
                        </div>
                        <Nav.Link href="/home#news-section">News & Blogs</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        {(width >= 992) 
                        ? (
                            <div className="avatar">
                                {idToken.length > 0 
                                ? (
                                    <Avatar alt="img" src={picture} />
                                )
                                : (
                                    <Avatar alt="" src=""/>
                                )}
                                {idToken.length > 0  
                                ? (
                                    <p className="avatar-name">Welcome<br/><p className="name">{username}</p></p>
                                )
                                : (
                                    <a href="/signup" className="avatar-name"><p className="name">Sign In!</p></a>
                                )}
                            </div>
                        ) : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;