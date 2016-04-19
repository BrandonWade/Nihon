/**
 * Created by Brandon W on 2016-03-23.
 */
const INTERVAL_MILLISECONDS = 1000;
const ZERO_STRING = "00:00:00:00";

var endDateTime = new Date();
endDateTime.setFullYear(2016, 3, 21);
endDateTime.setHours(13, 20, 00);
var endDateMilliseconds = endDateTime.getTime();

var currentDate = new Date();
var currentDateMilliseconds = currentDate.getTime();

var intervalTrigger = null;
var isNear = false;

$(window).on("load", function() {
    intervalTrigger = setInterval(updateCounter, INTERVAL_MILLISECONDS);
});

var timeString = "";
function updateCounter() {
    var currDateTime = new Date();

    if (currDateTime < endDateTime) {
        currentDateMilliseconds += INTERVAL_MILLISECONDS;
        timeString = getRemainingTime((endDateMilliseconds - currentDateMilliseconds) / 1000);
    } else {
        timeString = ZERO_STRING;
        window.clearInterval(intervalTrigger);
        finishedAnimation();
    }

    var textColour = isNear ? "#ee1111" : "#353535";
    $("#timerContainer").text(timeString).css('color', textColour);
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

    isNear = (days == 0) && (hours <= 24);
    return (days + ":" + hours + ":" + minutes + ":" + seconds);
}

function padInput(input) {
    if (input <= 9) {
        input = "0" + input;
    }

    return input;
}

function finishedAnimation() {
    setTimeout(function() {
        $("#contentContainer").fadeOut(250, function() {
            $("#flagContainer").fadeIn(250, function() {
                $(document.body).css('background', 'none');
            });
        });
    }, 1500);
}