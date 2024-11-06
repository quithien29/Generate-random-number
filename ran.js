// Random number genrator

//let randomnum = Math.random() * 6; //this will do is give us a random number between 0 and 6.
//advance way
//let randomnum = Math.floor(Math.random() * 6)+1;
//result = Math.floor(randomnum);
//console.log(randomnum);
//roll that dice betwwn 1> 6

//make the random number in a range 50 to 100
/*
const min = 50;
const max = 100;
//Math.floor() returns a largest integer less than or equal to a given number to a integer.
let randomnum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomnum); 
*/




const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;

}