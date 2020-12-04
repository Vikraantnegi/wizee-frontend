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
        subtitle : 'Here are some top locations for each weather.',
        location : [
            {
                sr : 1,
                name : 'Dharmshala',
                state : 'Himachal Pradesh',
                src : 'https://static.toiimg.com/photo/58840681.cms',
                max : 9,
                min : 5,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '88%',
                humidity : '92%',
                wind : '8km/hr',
            },
            {
                sr : 2,
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
                sr : 3,
                name : 'Manali',
                state : 'Himachal Pradesh',
                src : 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/07/rohtang-Pass.jpg',
                max : 6,
                min : 4,
                weather : 'Snowy',
                animationData : snowy,
                precipitation : '100%',
                humidity : '100%',
                wind : '8km/hr',
            },
            {
                sr : 4,
                name : 'Kasol',
                state : 'Himachal Pradesh',
                src : 'https://banbanjara.com/frontend/uploads/product/1577702184402-ToshBanBanjara.jpg?dim=784x422&type=resize',
                max : 8,
                min : 7,
                weather : 'Rainy',
                animationData : cloudy,
                precipitation : '94%',
                humidity : '100%',
                wind : '5km/hr',
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

