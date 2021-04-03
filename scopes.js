let greeting = 'Hello'; //=>Global scope
let weather = 'Cloudy';

function sayGreeting() {
    //=>Function scope
    let weather = 'Sunny';  //=>Shadowing
    greeting = 'Olá';
    console.log(greeting);
}

console.log(weather);
sayGreeting();

for(let i = 0; i<5; i++) { //let created block scope
    console.log(i);
}

console.log(`i: ${i}`);