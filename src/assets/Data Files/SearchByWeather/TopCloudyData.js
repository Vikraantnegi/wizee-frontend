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
        subtitle : 'Here are some top locations for cloudy weather.',
        location : [
            {
                sr : 1,
                name : 'Manali',
                state : 'Himachal Pradesh',
                src : 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/07/rohtang-Pass.jpg',
                max : 6,
                min : 4,
                weather : 'Cloudy',
                animationData : cloudy,
                precipitation : '100%',
                humidity : '100%',
                wind : '8km/hr',
            },
            {
                sr : 2,
                name : 'Gulmarg',
                state : 'Jammu & Kashmir',
                src : 'https://vargiskhan.com/log/wp-content/uploads/2019/01/gulmarg-in-january-3.jpg',
                max : 2,
                min : -4,
                weather : 'Cloudy',
                animationData : cloudy,
                precipitation : '70%',
                humidity : '89%',
                wind : '5km/hr',
            }, 
            {
                sr : 3,
                name : 'Auli',
                state : 'Uttarakhand',
                src : 'https://www.theindianwire.com/wp-content/uploads/2019/06/Auli.jpg',
                max : 4,
                min : -1,
                weather : 'Cloudy',
                animationData : cloudy,
                precipitation : '90%',
                humidity : '85%',
                wind : '6km/hr',
            },
            {
                sr : 4,
                name : 'Kinnaur',
                state : 'Himachal Pradesh',
                src : 'https://i.pinimg.com/originals/4f/a6/ea/4fa6ea55d9f8ef8db46400fa57da8ebd.jpg',
                max : -2,
                min : -10,
                weather : 'Cloudy',
                animationData : cloudy,
                precipitation : '50%',
                humidity : '78%',
                wind : '6km/hr',
            },
            {
                sr : 5,
                name : 'Yumthang',
                state : 'Sikkim',
                src : 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-for-Places-To-Visit-In-Rishikesh-In-May_16-Jan.jpg',
                max : 1,
                min : -7,
                weather : 'Cloudy',
                animationData : cloudy,
                precipitation : '40%',
                humidity : '85%',
                wind : '11km/hr',
            }, 
        ],
    },
];

