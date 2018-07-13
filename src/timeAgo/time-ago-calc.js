import timeago from 'timeago.js';
import TimeAgoSpanish from './es';
timeago.register("spanish",TimeAgoSpanish);

export default function (date) {
        const timeagoInstance = timeago(); // set the relative date here.
    
       return timeagoInstance.format(date, 'spanish')
    
}