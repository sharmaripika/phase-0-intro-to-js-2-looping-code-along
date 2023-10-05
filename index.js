// Code your solutions in this file



function writeCards(names ,eventName){
  const greeting =[];
    for(let i=0;i< names.length; i++){
    greeting.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
} 
console.log(greeting);
return greeting;}
let names = ["Guadalupe", "Ollie", "Aki"];
let eventName = "surprise";
let thankYouMessage =writeCards(names,eventName);
console.log(thankYouMessage);

function countDown(number){
  while(number>=0){
    console.log(number)
    number--;
  }
}

