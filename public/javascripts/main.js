/**
 * Created by Brandon W on 2016-03-23.
 */
const INTERVAL_MILLISECONDS = 1000;

var endDate = new Date();
endDate.setFullYear(2016, 3, 21);
endDate.setHours(13, 20, 00);
var endDateMilliseconds = endDate.getTime();

var currentDate = new Date();
var currentDateMilliseconds = currentDate.getTime();


$(window).on("load", function() {
    setInterval(updateCounter, INTERVAL_MILLISECONDS);
});

var timeString = "";
function updateCounter() {
    currentDateMilliseconds += INTERVAL_MILLISECONDS;
    timeString = getRemainingTime((endDateMilliseconds - currentDateMilliseconds) / 1000);
    $("#timerContainer").text(timeString);
}

var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
function getRemainingTime(timeDiff) {
    seconds = padInput(parseInt(timeDiff % 60));
    timeDiff /= 60;

    minutes = padInput(parseInt(timeDiff % 60));
    timeDiff /= 60;

    hours = padInput(parseInt(timeDiff % 24));
    timeDiff /= 24;

    days = padInput(parseInt(timeDiff));

    return (days + ":" + hours + ":" + minutes + ":" + seconds);
}

function padInput(input) {
    if (input <= 9) {
        input = "0" + input;
    }

    return input;
}