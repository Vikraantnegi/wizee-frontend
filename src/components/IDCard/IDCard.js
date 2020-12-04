import {React} from 'react';
import './IDCard.css';

const IDCard = ({name, src, type}) =>{
    return(
        <div className="image-round" id="second" data-aos="fade-up">
            <div className="irleft">
                <img src={src} alt="img" />
            </div>
            <div className="irright">
                <h3 style={{fontSize: 22}}>{name}</h3>
                <p style={{fontWeight: 'bold'}}>{type}</p>
            </div>
        </div>
    )
}

export default IDCard;
