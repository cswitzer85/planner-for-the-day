var currentTimeAndDate = new Date();
var year = currentTimeAndDate.getUTCFullYear();
var month = currentTimeAndDate.getUTCMonth();
var day = currentTimeAndDate.getUTCDate();
var hour = currentTimeAndDate.getUTCHours();
monthArray = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"]
document.getElementById("currentDay").innerHTML =(monthArray[month]) + " " + (day) + " " + (year);