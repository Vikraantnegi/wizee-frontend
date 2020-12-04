import {React} from 'react';
import './Header-Splash.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import splashlogo from '../../../assets/images/favicon.png';

function HeaderSplash(){
    return (
        <header className="header">
            <Navbar sticky="top" expand="lg" className="navbar">
                <Navbar.Brand href="/home">
                    <img src={splashlogo} width="50" height="50" className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Button variant="outline-primary" href="/home">Discover with Us!</Button>
                        <div className="avatar">
                            <Avatar alt="" src=""/>
                            <a href="/signup" className="avatar-name"><p className="name">Sign In!</p></a>
                        </div>
                    </Nav>
            </Navbar>
        </header>
    );
}

export default HeaderSplash;