//---------------_______________---------------Set Placeholder On Initial Page Render---------------_______________---------------
document.getElementById("9").placeholder = localStorage.getItem(9)
document.getElementById("10").placeholder = localStorage.getItem(10)
document.getElementById("11").placeholder = localStorage.getItem(11)
document.getElementById("12").placeholder = localStorage.getItem(12)
document.getElementById("13").placeholder = localStorage.getItem(13)
document.getElementById("14").placeholder = localStorage.getItem(14)
document.getElementById("15").placeholder = localStorage.getItem(15)
document.getElementById("16").placeholder = localStorage.getItem(16)
document.getElementById("17").placeholder = localStorage.getItem(17)

//---------------_______________---------------Variables---------------_______________---------------

var currentTimeAndDate = new Date();
var year = currentTimeAndDate.getFullYear();
var month = currentTimeAndDate.getMonth();
var day = currentTimeAndDate.getDate();
var hour = currentTimeAndDate.getHours();
var weekdays = moment.weekdays();

var dayOfWeek = weekdays[currentTimeAndDate.getDay()];
//---------------_______________---------------Input Per Time Slot---------------_______________---------------

var textBox9 = ""
// document.getElementById("9").value;
// localStorage.getItem(9)
var textBox10 = ""
// document.getElementById("10").value;
var textBox11 = ""
// document.getElementById("11").value;
var textBox12 = ""
// document.getElementById("12").value;
var textBox13 = ""
// document.getElementById("13").value;
var textBox14 = ""
// document.getElementById("14").value;
var textBox15 = ""
// document.getElementById("15").value;
var textBox16 = ""
// document.getElementById("16").value;
var textBox17 = ""
// document.getElementById("17").value;

//---------------_______________---------------Set Time & Date In Header---------------_______________---------------

monthArray = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"]
document.getElementById("currentDay").innerHTML = dayOfWeek + " " + (monthArray[month]) + " " + (day) + " " + (year);

//---------------_______________---------------Set BG Color Changes---------------_______________---------------
//---------------_______________---------------<9 AM>---------------_______________---------------

document.getElementById("time9").innerHTML = moment().startOf("day").add(9, "hour").format("hh:mm A");

if (hour > 9) {
    $("#eventInput9").css("background-color", "lightgray");
}
if (hour == 9) {
    $("#eventInput9").css("background-color", "red");
}
if (hour < 9) {
    $("#eventInput9").css("background-color", "lime");
}

//---------------_______________---------------<10 AM>---------------_______________---------------

document.getElementById("time10").innerHTML = moment().startOf("day").add(10, "hour").format("hh:mm A");
if (hour > 10) {
    $("#eventInput10").css("background-color", "lightgray");
}
if (hour == 10) {
    $("#eventInput10").css("background-color", "red");
}
if (hour < 10) {
    $("#eventInput10").css("background-color", "lime");
}

//---------------_______________---------------<11 AM>---------------_______________---------------

document.getElementById("time11").innerHTML = moment().startOf("day").add(11, "hour").format("hh:mm A");
if (hour > 11) {
    $("#eventInput11").css("background-color", "lightgray");
}
if (hour == 11) {
    $("#eventInput11").css("background-color", "red");
}
if (hour < 11) {
    $("#eventInput11").css("background-color", "lime");
}

//---------------_______________---------------<12 PM>---------------_______________---------------

document.getElementById("time12").innerHTML = moment().startOf("day").add(12, "hour").format("hh:mm A");
if (hour > 12) {
    $("#eventInput12").css("background-color", "lightgray");
}
if (hour == 12) {
    $("#eventInput12").css("background-color", "red");
}
if (hour < 12) {
    $("#eventInput12").css("background-color", "lime");
}

//---------------_______________---------------<1 PM>---------------_______________---------------

document.getElementById("time13").innerHTML = moment().startOf("day").add(13, "hour").format("hh:mm A");
if (hour > 13) {
    $("#eventInput13").css("background-color", "lightgray");
}
if (hour == 13) {
    $("#eventInput13").css("background-color", "red");
}
if (hour < 13) {
    $("#eventInput13").css("background-color", "lime");
}

//---------------_______________---------------<2 PM>---------------_______________---------------

document.getElementById("time14").innerHTML = moment().startOf("day").add(14, "hour").format("hh:mm A");
if (hour > 14) {
    $("#eventInput14").css("background-color", "lightgray");
}
if (hour == 14) {
    $("#eventInput14").css("background-color", "red");
}
if (hour < 14) {
    $("#eventInput14").css("background-color", "lime");
}

//---------------_______________---------------<3 PM>---------------_______________---------------

document.getElementById("time15").innerHTML = moment().startOf("day").add(15, "hour").format("hh:mm A");
if (hour > 15) {
    $("#eventInput15").css("background-color", "lightgray");
}
if (hour == 15) {
    $("#eventInput15").css("background-color", "red");
}
if (hour < 15) {
    $("#eventInput15").css("background-color", "lime");
}

//---------------_______________---------------<4 PM>---------------_______________---------------

document.getElementById("time16").innerHTML = moment().startOf("day").add(16, "hour").format("hh:mm A");

if (hour > "16") {
    $("#eventInput16").css("background-color", "lightgray");
}
if (hour == "16") {
    $("#eventInput16").css("background-color", "red");
}
if (hour < "16") {
    $("#eventInput16").css("background-color", "lime");
}

//---------------_______________---------------<5 PM>---------------_______________---------------

document.getElementById("time17").innerHTML = moment().startOf("day").add(17, "hour").format("hh:mm A");
if (hour > "17") {
    $("#eventInput17").css("background-color", "lightgray");
}
if (hour == "17") {
    $("#eventInput17").css("background-color", "red");
}
if (hour < "17") {
    $("#eventInput17").css("background-color", "lime");
}

//---------------_______________---------------Functions---------------_______________---------------

function save9() {
    console.log("button 9 clicked")
    textBox9 = document.getElementById("9").value;
    localStorage.setItem("9", textBox9);
    document.getElementById("9").placeholder = localStorage.getItem(9);
}
// document.addEventListener("#btn10")
function save10() {
    console.log("button 10 clicked")
    textBox10 = document.getElementById("10").value;
    localStorage.setItem("10", textBox10);
    document.getElementById("10").placeholder = localStorage.getItem(10);
}
// document.addEventListener("#btn11")
function save11() {
    console.log("button 11 clicked")
    textBox11 = document.getElementById("11").value;
    localStorage.setItem("11", textBox11);
    document.getElementById("11").placeholder = localStorage.getItem(11);
}
// document.addEventListener("#btn12")
function save12() {
    console.log("button 12 clicked")
    textBox12 = document.getElementById("12").value;
    localStorage.setItem("12", textBox12);
    document.getElementById("12").placeholder = localStorage.getItem(12);
}
// document.addEventListener("#btn13")
function save13() {
    console.log("button 13 clicked")
    textBox13 = document.getElementById("13").value;
    localStorage.setItem("13", textBox13);
    document.getElementById("13").placeholder = localStorage.getItem(13);
}
// document.addEventListener("#btn14")
function save14() {
    console.log("button 14 clicked")
    textBox14 = document.getElementById("14").value;
    localStorage.setItem("14", textBox14);
    document.getElementById("14").placeholder = localStorage.getItem(14);
}
// document.addEventListener("#btn15")
function save15() {
    console.log("button 15 clicked")
    textBox15 = document.getElementById("15").value;
    localStorage.setItem("15", textBox15);
    document.getElementById("15").placeholder = localStorage.getItem(15);
}
// document.addEventListener("#btn16")
function save16() {
    console.log("button 16 clicked")
    textBox16 = document.getElementById("16").value;
    localStorage.setItem("16", textBox16);
    document.getElementById("16").placeholder = localStorage.getItem(16);
}
// document.addEventListener("#btn17")
function save17() {
    console.log("button 17 clicked")
    textBox17 = document.getElementById("17").value;
    localStorage.setItem("17", textBox17);
    document.getElementById("17").placeholder = localStorage.getItem(17);
}



//---------------_______________---------------Special Functions---------------_______________---------------
function clearSchedule() {
    localStorage.clear();
    console.log("clear button clicked")
    textBox9 = "Clear";
    localStorage.setItem("9", textBox9);
    document.getElementById("9").placeholder = localStorage.getItem(9);

    localStorage.clear();
    console.log("clear button clicked")
    textBox10 = "Clear";
    localStorage.setItem("10", textBox10);
    document.getElementById("10").placeholder = localStorage.getItem(10);

    localStorage.clear();
    console.log("clear button clicked")
    textBox11 = "Clear";
    localStorage.setItem("11", textBox11);
    document.getElementById("11").placeholder = localStorage.getItem(11);

    localStorage.clear();
    console.log("clear button clicked")
    textBox12 = "Clear";
    localStorage.setItem("12", textBox12);
    document.getElementById("12").placeholder = localStorage.getItem(12);

    localStorage.clear();
    console.log("clear button clicked")
    textBox13 = "Clear";
    localStorage.setItem("13", textBox13);
    document.getElementById("13").placeholder = localStorage.getItem(13);

    localStorage.clear();
    console.log("clear button clicked")
    textBox14 = "Clear";
    localStorage.setItem("14", textBox14);
    document.getElementById("14").placeholder = localStorage.getItem(14);

    localStorage.clear();
    console.log("clear button clicked")
    textBox15 = "Clear";
    localStorage.setItem("15", textBox15);
    document.getElementById("15").placeholder = localStorage.getItem(15);

    localStorage.clear();
    console.log("clear button clicked")
    textBox16 = "Clear";
    localStorage.setItem("16", textBox16);
    document.getElementById("16").placeholder = localStorage.getItem(16);

    localStorage.clear();
    console.log("clear button clicked")
    textBox17 = "Clear";
    localStorage.setItem("17", textBox17);
    document.getElementById("17").placeholder = localStorage.getItem(17);
}

function blockSchedule() {
    localStorage.clear();
    console.log("block button clicked")
    textBox9 = "Block";
    localStorage.setItem("9", textBox9);
    document.getElementById("9").placeholder = localStorage.getItem(9);

    localStorage.clear();
    console.log("block button clicked")
    textBox10 = "Block";
    localStorage.setItem("10", textBox10);
    document.getElementById("10").placeholder = localStorage.getItem(10);

    localStorage.clear();
    console.log("block button clicked")
    textBox11 = "Block";
    localStorage.setItem("11", textBox11);
    document.getElementById("11").placeholder = localStorage.getItem(11);

    localStorage.clear();
    console.log("block button clicked")
    textBox12 = "Block";
    localStorage.setItem("12", textBox12);
    document.getElementById("12").placeholder = localStorage.getItem(12);

    localStorage.clear();
    console.log("block button clicked")
    textBox13 = "Block";
    localStorage.setItem("13", textBox13);
    document.getElementById("13").placeholder = localStorage.getItem(13);

    localStorage.clear();
    console.log("block button clicked")
    textBox14 = "Block";
    localStorage.setItem("14", textBox14);
    document.getElementById("14").placeholder = localStorage.getItem(14);

    localStorage.clear();
    console.log("block button clicked")
    textBox15 = "Block";
    localStorage.setItem("15", textBox15);
    document.getElementById("15").placeholder = localStorage.getItem(15);

    localStorage.clear();
    console.log("block button clicked")
    textBox16 = "Block";
    localStorage.setItem("16", textBox16);
    document.getElementById("16").placeholder = localStorage.getItem(16);

    localStorage.clear();
    console.log("block button clicked")
    textBox17 = "Block";
    localStorage.setItem("17", textBox17);
    document.getElementById("17").placeholder = localStorage.getItem(17);

}