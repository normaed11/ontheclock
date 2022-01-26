// Current Day
var date = new Date();
var day = (new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
}).format(date));
document.getElementById("currentDay").innerHTML = day;
// gets current hour and color codes time block
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
// get text from local storage and displays it
var eventdata = []
if (localStorage.getItem("events") !== null) {


    eventdata = JSON.parse(localStorage.getItem("events"));
    console.log(eventdata)
    for (var i = 0; i < events.length; i++) {
        events[i].innerText = eventdata[i];
    }
}
// if no local storage then display blank strings  
else {
    for (var i = 0; i < events.length; i++) {
        eventdata.push("");
        events[i].innerHTML = eventdata[i];
    }

}

//get event texts and saves it to local storage 
$(".row").on("click", ".saveBtn", function () {
    var sibling = $(this).siblings(".event");
    var index = parseInt(sibling[0].getAttribute("data-hour")) - 9;
    console.log(sibling)
    eventdata[index] = sibling.text();
    localStorage.setItem("events", JSON.stringify(eventdata));

});