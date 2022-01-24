// Current Day
var date = new Date();
var day = (new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
}).format(date));
document.getElementById("currentDay").innerHTML = day;

var hour = Number(new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hourCycle: "h24"
}).format(date));
var events = document.getElementsByClassName("event");
for (var i = 0; i < events.length; i++) {
    var data = parseInt(events[i].getAttribute("data-hour"));
    if (data > hour) {
        events[i].classList.add("future");
    }
    else if (data == hour) {
        events[i].classList.add("present");
    }
    else {
        events[i].classList.add("past");
    }
}
var eventdata = []
if (localStorage.getItem("events") !== null) {


    eventdata = JSON.parse(localStorage.getItem("events"));
    console.log(eventdata)
    for (var i = 0; i < events.length; i++) {
        events[i].innerText = eventdata[i];
    }
}



else {
    for (var i = 0; i < events.length; i++) {
        eventdata.push("");
        events[i].innerText = eventdata[i];
    }

}
var btns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < btns.length; i++) {
    var updatedevents = document.getElementsByClassName("event");
    eventdata[i] = updatedevents[i].innerText;
    console.log(eventdata)
    btns[i].addEventListener("click", function () {


        localStorage.setItem("events", JSON.stringify(eventdata));

    })
}
$(".row").on("click", ".saveBtn", function () {
    var text = $(this).children("event").text().trim();
    console.log(text)
});