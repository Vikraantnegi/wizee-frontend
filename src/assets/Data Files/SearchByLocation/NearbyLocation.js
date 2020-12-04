/* eslint-disable import/no-anonymous-default-export */
import clear from '../../Illustrations/35631-weather-day-scattered-clouds.json';
import rainy from '../../Illustrations/36240-rain-icon.json';
import snowy from '../../Illustrations/12055-snowing.json';
import cloudy from '../../Illustrations/35750-weather-night-mist.json';
import sunny from '../../Illustrations/36236-sun-icon.json';

export default [
    {
        sr : 1,
        title : 'Nearby Locations',
        subtitle : 'Here are some nearby locations.',
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
                name : 'Mcleodganj',
                state : 'Himachal Pradesh',
                src : 'https://www.avis.co.in/blog/wp-content/uploads/2018/08/Mcleodganj-1.jpg',
                max : 7,
                min : 3,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '88%',
                humidity : '92%',
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
                animationData : rainy,
                precipitation : '94%',
                humidity : '100%',
                wind : '5km/hr',
            },
            {
                sr : 5,
                name : 'Kullu',
                state : 'Himachal Pradesh',
                src : 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/shutterstock_1350638618.jpg',
                max : 13,
                min : 10,
                weather : 'Rainy',
                animationData : rainy,
                precipitation : '94%',
                humidity : '100%',
                wind : '8km/hr',
            },
        ],
    },
];

