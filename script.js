var wakeuptime = 7;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var noon = 12;
var evening = 18;

var showTime = function() { 
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10)? "0" + hour : hour; // set hours 
    minute = (minute < 10) ? "0" + minute : minute; // set minutes
    second = (second < 10) ? "0" + second : second; // set seconds

    // put together the string that displays the time
    var clockTime = hour + ":" + minute + ":" + second + " " + session;
    clock.innerText = clockTime;
};

// make the clock increment on its own and change message and picture accordingly
var updateClock = function() {

    var time = new Date().getHours();
    var messageText;
    var image = 'img/normalbrown.jpg';

    var timeEventJS = document.getElementById('timeEvent');
    var ddangImageJS = document.getElementById('ddangImage');

    if (time == partytime) {
        image = 'img/partybrown.jpg';
        messageText = "Time to party!";
    }

    else if (time == wakeuptime) {
        image = 'img/wakeupbrown.jpg';
        messageText = "Wake up huwaaaaargh!";
    }

    else if (time == lunchtime) {
        image = 'img/lunchbrown.jpg';
        messageText = "Time for lunch!!";
    }

    else if (time == naptime) {
        image = 'img/napbrown.jpg';
        messageText = "Sleep zzzzz";
    }

    else if (time < noon) {
        image = 'img/morningbrown.jpg';
        messageText = "Wake up!!";
    }

    else if (time >= evening) {
        image = 'img/eveningbrown.jpg';
        messageText = "Good evening!";
    }

    else {
        image = 'img/normalbrown.jpg';
        messageText = "Goood meowternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    ddangImageJS.src = image;

    showTime();
};

updateClock();

// Increment clock once a second
var oneSec = 1000;
setInterval(updateClock, oneSec);

// Party time button 
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over! :(";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }

    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Wake up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value; 
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Lunch selector
var lunchTimeSelector = document.getElementById("lunchtimeSelector");

var lunchEvent = function() {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Nap time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

