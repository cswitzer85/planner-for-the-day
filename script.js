//---------------_______________---------------Variables---------------_______________---------------
var currentTimeAndDate = new Date();
var year = currentTimeAndDate.getFullYear();
var month = currentTimeAndDate.getMonth();
var day = currentTimeAndDate.getDate();
var hour = currentTimeAndDate.getHours();
var weekdays = moment.weekdays();
var dayOfWeek = weekdays[currentTimeAndDate.getDay()];
//---------------_______________---------------Input Per Time Slot---------------_______________---------------
var array9 = ""
//document.getElementById("9").value;
var array10 = ""
// document.getElementById("10").value;
var array11 = ""
// document.getElementById("11").value;
var array12 = ""
// document.getElementById("12").value;
var array13 = ""
// document.getElementById("13").value;
var array14 = ""
// document.getElementById("14").value;
var array15 = ""
// document.getElementById("15").value;
var array16 = ""
// document.getElementById("16").value;
var array17 = ""
// document.getElementById("17").value;

//---------------_______________---------------Set Time & Date---------------_______________---------------
monthArray = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"]
document.getElementById("currentDay").innerHTML = dayOfWeek + " " + (monthArray[month]) + " " + (day) + " " + (year);
//---------------_______________---------------Set BG Color Changes---------------_______________---------------
//---------------_______________---------------<9 AM>---------------_______________---------------
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
//---------------_______________---------------<10 AM>---------------_______________---------------
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
//---------------_______________---------------<12 PM>---------------_______________---------------
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
//---------------_______________---------------<2 PM>---------------_______________---------------
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
//---------------_______________---------------<3 PM>---------------_______________---------------
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
//---------------_______________---------------<4 PM>---------------_______________---------------
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
//---------------_______________---------------<5 PM>---------------_______________---------------
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


// for (i = 0; i < playerNameStored.length; i++) {
//     var scoreText = " - - - - - - - - - - " + playerNameStored[i] + " . . . . . " + playerScoreStored[i] + " - - - - - - - - - - ";
//     var newLi = $("<li>")
//     newLi.text(scoreText)
//     newLi.appendTo(".scoreBoard")
// }

//---------------_______________---------------<Commented Out HTML For Reference>---------------_______________---------------
// { <thread class="time-block">
// <tr class="row">
//   <td class="hour" id="time9">9 o'clock AM</td>
//   <td name="9AmText" id="9" value=9 class="col-8 eventInput">text</td>
//   <td class="saveBtn" id="btn9"><i class="fas fa-save"></i></td>
// </tr>
// </thread>
// <thread class="time-block"> }