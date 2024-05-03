
import './index.html';
import './catalog.html';
// import './index.scss';

import 'jquery-form-styler';
import 'moment';
import 'fullcalendar';

// import 'ion-rangeslider';
// import './modules/slider';


$(document).ready(function () {
    console.log($('.link'))
    $('.form__input-location').styler();
    $('#calendar_in').fullCalendar({
        // Опції календаря
        events: [
            // Події календаря
        ],
        select: function (start, end) {
            // currentSelectedDate = start;
            // console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
            // console.log('Вибрана дата: ' + currentSelectedDate.format());
        },
        dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
    });

})