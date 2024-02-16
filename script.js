// calendar 

const date= document.getElementById("date");
const day= document.getElementById("day");
const month= document.getElementById("month");
const year= document.getElementById("year");

const today = new Date();

const weekdays =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const allmonths =["january","February","March","April","May","June","July","August","September","October","November","December"];


date.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();


