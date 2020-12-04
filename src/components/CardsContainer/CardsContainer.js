import {React, useState} from 'react';
import './CardsContainer.css';
import travel from '../../assets/Illustrations/undraw_businesswoman_pc12.svg';
import {FormControl, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import BlogData from '../../assets/Data Files/BlogData';
import NewsData from '../../assets/Data Files/NewsData';
import BlogCard from '../BlogCard/BlogCard';
import NewsCard from '../NewsCard/NewsCard';


function CardsContainer(){
    const [value, setvalue] = useState('');
    const handleChange = (event) => {
        setvalue(event.target.value);
    }
    return(
        <div id="news-section">
            <div id="outer-container">
                <div className="cardsection-header"> 
                    <h2 className="h1 cardsection-heading">Daily Top News & Blogs</h2>
                    <h5 className="h4 cards-sub-heading">Read them before you plan yourself a trip!</h5>
                    <div className="search mb-20">
                        <form method="" action="" id="search">
                            <i className="fas fa-search icon"></i><input className="search-box" type="text" size="40" placeholder="Type your destination!" />
                        </form>
                        <FormControl component="fieldset" style={{width: '50%', marginTop: 10}}>
                            <RadioGroup style={{justifyContent: "space-around"}} row aria-label="searchby" name="search" value={value} onChange={handleChange}>
                                <FormControlLabel value="news" control={<Radio />} label="News" />
                                <FormControlLabel value="blogs" control={<Radio />} label="Blogs" />
                                <FormControlLabel value="vlogs" control={<Radio />} label="Vlogs" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <img src={travel} style={{marginTop: -350}} alt="" height="350" width="350" />
                </div> 
                <div className="cards-container">
                    {BlogData.map(blog => (
                        <BlogCard key={blog.key} src={blog.src} date={blog.date} 
                            title={blog.title} author={blog.author} text={blog.text} />
                    ))}
                    {NewsData.map(news => (
                        <NewsCard key={news.key} src={news.src} date={news.date}
                            title={news.title} text={news.text} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsContainer;