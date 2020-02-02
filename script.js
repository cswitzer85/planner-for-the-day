//---------------_______________---------------Variables---------------_______________---------------
var currentTimeAndDate = new Date();
var year = currentTimeAndDate.getFullYear();
var month = currentTimeAndDate.getMonth();
var day = currentTimeAndDate.getDate();
var hour = currentTimeAndDate.getHours();
//---------------_______________---------------Set Times With Moment---------------_______________---------------
monthArray = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"]
document.getElementById("currentDay").innerHTML = (monthArray[month]) + " " + (day) + " " + (year);
document.getElementById("time9").innerHTML = moment().startOf("day").add(9, "hour").format("hh:mm A");
document.getElementById("time16").innerHTML = moment().startOf("day").add(16, "hour").format("hh:mm A");
//---------------_______________---------------Set BG Colors---------------_______________---------------
//---------------_______________---------------<9 AM>
document.getElementById("time9").innerHTML = moment().startOf("day").add(9, "hour").format("hh:mm A");

if (hour > 9) {
    $("#9").css("background-color", "lightgray");
}
if (hour == 9) {
    $("#9").css("background-color", "red");
}
if (hour < 9) {
    $("#9").css("background-color", "lime");
}
//---------------_______________---------------<10 AM>
document.getElementById("time10").innerHTML = moment().startOf("day").add(10, "hour").format("hh:mm A");
if (hour > 10) {
    $("#10").css("background-color", "lightgray");
}
if (hour == 10) {
    $("#10").css("background-color", "red");
}
if (hour < 10) {
    $("#10").css("background-color", "lime");
}
//---------------_______________---------------<11 AM>
document.getElementById("time11").innerHTML = moment().startOf("day").add(11, "hour").format("hh:mm A");
if (hour > 11) {
    $("#11").css("background-color", "lightgray");
}
if (hour == 11) {
    $("#11").css("background-color", "red");
}
if (hour < 11) {
    $("#11").css("background-color", "lime");
}
//---------------_______________---------------<12 PM>
document.getElementById("time12").innerHTML = moment().startOf("day").add(12, "hour").format("hh:mm A");
if (hour > 12) {
    $("#12").css("background-color", "lightgray");
}
if (hour == 12) {
    $("#12").css("background-color", "red");
}
if (hour < 12) {
    $("#12").css("background-color", "lime");
}
//---------------_______________---------------<1 PM>
document.getElementById("time13").innerHTML = moment().startOf("day").add(13, "hour").format("hh:mm A");
if (hour > 13) {
    $("#13").css("background-color", "lightgray");
}
if (hour == 13) {
    $("#13").css("background-color", "red");
}
if (hour < 13) {
    $("#13").css("background-color", "lime");
}
//---------------_______________---------------<2 PM>
document.getElementById("time14").innerHTML = moment().startOf("day").add(14, "hour").format("hh:mm A");
if (hour > 14) {
    $("#14").css("background-color", "lightgray");
}
if (hour == 14) {
    $("#14").css("background-color", "red");
}
if (hour < 14) {
    $("#14").css("background-color", "lime");
}
//---------------_______________---------------<3 PM>
document.getElementById("time15").innerHTML = moment().startOf("day").add(15, "hour").format("hh:mm A");
if (hour > 15) {
    $("#15").css("background-color", "lightgray");
}
if (hour == 15) {
    $("#15").css("background-color", "red");
}
if (hour < 15) {
    $("#15").css("background-color", "lime");
}
//---------------_______________---------------<4 PM>
document.getElementById("time16").innerHTML = moment().startOf("day").add(16, "hour").format("hh:mm A");

if (hour > "16") {
    $("#16").css("background-color", "lightgray");
}
if (hour == "16") {
    $("#16").css("background-color", "red");
}
if (hour < "16") {
    $("#16").css("background-color", "lime");
}
//---------------_______________---------------<5 PM>
document.getElementById("time17").innerHTML = moment().startOf("day").add(17, "hour").format("hh:mm A");
if (hour > "17") {
    $("#17").css("background-color", "lightgray");
}
if (hour == "17") {
    $("#17").css("background-color", "red");
}
if (hour < "17") {
    $("#17").css("background-color", "lime");
}