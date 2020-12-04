/* eslint-disable import/no-anonymous-default-export */
import clear from '../../Illustrations/35631-weather-day-scattered-clouds.json';
import rainy from '../../Illustrations/36240-rain-icon.json';
import snowy from '../../Illustrations/12055-snowing.json';
import cloudy from '../../Illustrations/35750-weather-night-mist.json';
import sunny from '../../Illustrations/36236-sun-icon.json';

export default [
    {
        sr : 1,
        title : 'Recently Searched',
        subtitle : 'Here are some of your recent searches.',
        location : [
            {
                sr : 1,
                name : 'Jaipur',
                state : 'Rajasthan',
                src : 'https://cdn1.goibibo.com/voy_ing/t_fs/rajasthan-jaipur-148046447735o.jpeg',
                max : 25,
                min : 12,
                weather : 'Haze',
                animationData : sunny,
                precipitation : '0%',
                humidity : '34%',
                wind : '8km/hr',
            },    
            {
                sr : 2,
                name : 'Kodaikanal',
                state : 'Kerela',
                src : 'https://www.livelaw.in/h-upload/2019/08/19/363336-kodaikanal-hills.jpg',
                max : 17,
                min : 13,
                weather : 'Cloudy',
                animationData : cloudy,
                precipitation : '44%',
                humidity : '88%',
                wind : '3km/hr',
            },
            {
                sr : 3,
                name : 'Leh',
                state : 'Ladakh',
                src : 'https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/leh/leh-ladakh-leh-ladakh-zanskar-valley.jpg/jcr:content/renditions/cq5dam.web.1024.576.jpeg',
                max : -5,
                min : -12,
                weather : 'Clear',             
                animationData : clear,
                precipitation : '1%',
                humidity : '59%',
                wind : '2km/hr',
            },
            {
                sr : 4,
                name : 'Kedarnath',
                state : 'Uttarakhand',
                src : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/GettyImages-166731773.jpeg?5dkYAJa7sXxaw3OhpqWbR.y2cDOVdPYT',
                max : -3,
                min : -7,
                weather : 'Clear',
                animationData : clear,
                precipitation : '1%',
                humidity : '41%',
                wind : '6km/hr',
            },
            {
                sr : 5,
                name : 'Rishikesh',
                state : 'Uttarakhand',
                src : 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-for-Places-To-Visit-In-Rishikesh-In-May_16-Jan.jpg',
                max : 25,
                min : 11,
                weather : 'Clear',
                animationData : clear,
                precipitation : '1%',
                humidity : '67%',
                wind : '0km/hr',
            },        
        ],
    },      
];

