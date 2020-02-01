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
if (hour > 9) {
    $("#9").css("background-color", "lightgray");
}
if (hour == 9) {
    $("#9").css("background-color", "red");
}
if (hour < 9) {
    $("#9").css("background-color", "lime");
}



if (hour > "16") {
    $("#16").css("background-color", "lightgray");
}
if (hour == "16") {
    $("#16").css("background-color", "red");
}
if (hour < "16") {
    $("#16").css("background-color", "lime");
}
if (hour > "17") {
    $("#17").css("background-color", "lightgray");
}
if (hour == "17") {
    $("#17").css("background-color", "red");
}
if (hour < "17") {
    $("#17").css("background-color", "lime");
}



// eventInput background-color

// for (i = 0; i < playerNameStored.length; i++) {
//     var scoreText = " - - - - - - - - - - " + playerNameStored[i] + " . . . . . " + playerScoreStored[i] + " - - - - - - - - - - ";
//     var newLi = $("<li>")
//     newLi.text(scoreText)
//     newLi.appendTo(".scoreBoard")
// }


// { <thread class="time-block">
// <tr class="row">
//   <td class="hour" id="time9">9 o'clock AM</td>
//   <td name="9AmText" id="9" value=9 class="col-8 eventInput">text</td>
//   <td class="saveBtn" id="btn9"><i class="fas fa-save"></i></td>
// </tr>
// </thread>
// <thread class="time-block"> }