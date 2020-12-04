/* eslint-disable import/no-anonymous-default-export */
import clear from '../../Illustrations/33604-skydiver.json';
import rainy from '../../Illustrations/36306-rain-falling-on-an-umbrella.json';
import snowy from '../../Illustrations/12055-snowing.json';
import cloudy from '../../Illustrations/1800-sky.json';
import sunny from '../../Illustrations/36236-sun-icon.json';

export default[
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
    {
        sr : 4,
        day : 'Monday',
        date : '23 Nov',
        min : 1,
        max : 9,
        desc : '3cm rain possibility.',
        animationData : rainy,
        weather : 'Rainy',
    },
    {
        sr : 5,
        day : 'Tuesday',
        date : '24 Nov',
        min : -3,
        max : 4,
        desc : 'Snow possibility is 90%.',
        animationData : snowy,
        weather : 'Snowy',
    },
];
