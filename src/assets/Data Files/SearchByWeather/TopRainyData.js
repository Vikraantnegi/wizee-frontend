/* eslint-disable import/no-anonymous-default-export */
import clear from '../../Illustrations/35631-weather-day-scattered-clouds.json';
import rainy from '../../Illustrations/36240-rain-icon.json';
import snowy from '../../Illustrations/12055-snowing.json';
import cloudy from '../../Illustrations/35750-weather-night-mist.json';
import sunny from '../../Illustrations/36236-sun-icon.json';

export default [
    {
        sr : 1,
        title : 'Top Locations',
        subtitle : 'Here are some top locations for rainy weather.',
        location : [
            {
                sr : 1,
                name : 'Kodaikanal',
                state : 'Tamil Nadu',
                src : 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/winter-3.jpg',
                max : 16,
                min : 11,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '70%',
                humidity : '89%',
                wind : '10km/hr',
            },
            {
                sr : 2,
                name : 'Trivandrum',
                state : 'Kerala',
                src : 'https://img.etimg.com/thumb/width-640,height-480,imgsize-656533,resizemode-1,msid-69642915/news/economy/agriculture/rains-to-reach-kerala-in-2-days-no-respite-yet-in-north-central-india/monsoon.jpg',
                max : 28,
                min : 24,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '60%',
                humidity : '72%',
                wind : '8km/hr',
            }, 
            {
                sr : 3,
                name : 'Chennai',
                state : 'Tamil Nadu',
                src : 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chennai_-_bird%27s-eye_view.jpg',
                max : 24,
                min : 21,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '80%',
                humidity : '82%',
                wind : '27km/hr',
            },
            {
                sr : 4,
                name : 'Kottayam',
                state : 'Kerela',
                src : 'https://www.keralatourism.org/images/destination/mobile/aquatourism_in_kottayam20131107114930_247_2.jpg',
                max : 29,
                min : 27,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '70%',
                humidity : '78%',
                wind : '10km/hr',
            },
            {
                sr : 5,
                name : 'Kochi',
                state : 'Kerela',
                src : 'https://nestreeo.com/wp-content/uploads/2020/01/Buy-Plants-Online-in-Kochi.jpg',
                max : 32,
                min : 25,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '60%',
                humidity : '73%',
                wind : '13km/hr',
            }, 
        ],
    },
];

