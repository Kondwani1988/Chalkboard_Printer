// Welcome to the Chalkboard Printer!
const input = require('sync-input');

let name = input("Enter name");
let surname = input("Enter surname");
let message = input("Enter message");
let msgToDisplay = `This is ${name} ${surname} and ${message}.`;

let number = Number(input("Enter the number of repeats"));
let i = 0;

while (i < number) {
  console.log(msgToDisplay);
  i++;
}