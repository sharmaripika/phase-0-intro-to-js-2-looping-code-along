// Code your solutions in this file
const names =["Charlie", "Samip", "Ali"];
const events = "birthday";
function writeCards(names, events) {
    const greetings = [];   for (let i = 0; i < names.length; i++) 
    {const greeting = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
greetings.push(greeting); }
return greetings;}
const thankYouGreetings = writeCards(names,events);
console.log(thankYouGreetings);



function countDown(num) {
    while(num >=0) {
      console.log(num);
      num--;
    }
  }
  countDown(10);
  