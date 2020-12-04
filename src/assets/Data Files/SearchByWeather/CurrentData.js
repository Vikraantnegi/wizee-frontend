/* eslint-disable import/no-anonymous-default-export */
import clear from '../../Illustrations/35631-weather-day-scattered-clouds.json';
import rainy from '../../Illustrations/36240-rain-icon.json';
import snowy from '../../Illustrations/12055-snowing.json';
import cloudy from '../../Illustrations/35750-weather-night-mist.json';
import sunny from '../../Illustrations/36236-sun-icon.json';

export default[
    {
        daily : [
            {
                sr : 1,
                day : 'Friday',
                date : '20 Nov',
                min : 2,
                max : 12,
                desc : 'Wind Speed is high.',
                animationData : clear,
                weather : 'Clear Sky',
            },
            {
                sr : 2,
                day : 'Saturday',
                date : '21 Nov',
                min : 2,
                max : 11,
                desc : 'Wind Speed is medium.',
                animationData : sunny,
                weather : 'Sunny',
            },
            {
                sr : 3,
                day : 'Sunday',
                date : '22 Nov',
                min : 4,
                max : 12,
                desc : 'Rain possibility is 55%.',
                animationData : cloudy,
                weather : 'Cloudy',
            },
        ],
        nearby : [
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
