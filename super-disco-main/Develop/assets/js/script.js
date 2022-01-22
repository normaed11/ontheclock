// Current Day
var date = new Date();
var dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = dayarray[date.getDay()] + ", " + montharray[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();


document.getElementById("currentDay").innerHTML = day;

