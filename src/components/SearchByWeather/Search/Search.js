import {React, useEffect, useState} from 'react';
import './Search.css';
import {DropdownButton, Dropdown} from 'react-bootstrap';

let states = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
                "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
                "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
                "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand",
                "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
                "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

let types = ["Hills & Mountains", "Desert", "Coastal Areas", "Landscapes"];

function Search() {
    const [title, settitle] = useState('--- Select your Region ---  ');
    const [title1, settitle1] = useState('--- Select Type ---   ');
    return(
        <div id="search-section1">
            <div className="filters" style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <div className="filters">
                    <h5 className="h4 mr-20">Choose your Region: </h5>
                    <DropdownButton 
                        variant="outline-primary"
                        id="dropdown-menu-align-right" 
                        title={title}
                        menuAlign="right"
                    >
                        {states.map(state => (
                            <Dropdown.Item as="button" onClick={() => settitle(state)}>{state}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
                <div className="filters">
                    <h5 className="h4 mr-20">Choose Type: </h5>
                    <DropdownButton 
                        variant="outline-primary"
                        id="dropdown-menu-align-right" 
                        title={title1}
                        menuAlign="right"
                    >
                        {types.map(type => (
                            <Dropdown.Item as="button"onClick={() => settitle1(type)}>{type}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            </div>
        </div>
    );
}

export default Search;