console.log('Yeyyy, JavaScript is connected');

//Get the div reference / object on my javascript file

//1. getElementById => returns one element
const theCatDiv = document.getElementById('cat');
//theCatDiv.innerText = "I'm a cat"; //DOM Manipulation - Document Object Model

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '5rem';

//2. getElementsByClassName => returns a list of elements
const mice = document.getElementsByClassName('mouse');
mice[0].innerText = 'Mickey';
mice[1].innerText = 'Jerry';

const miceArray = [...mice]; //<= converts the htmllist into an array

miceArray.forEach((mouse) => {
    mouse.innerText = 'Bananas';
});

//3. getElementsByTagName => returns a list of elements
const allDivs = document.getElementsByTagName('div');
console.log(allDivs);

//4. querySelector <= returns the first element
document.querySelector('.mouse'); //Getting the element by class name
document.querySelector('#cat'); //Getting the element by Id
document.querySelector('div'); //Getting the element by tagname

//5. querySelectorAll <= returns a list of elements
document.querySelectorAll('.mouse'); //Getting the elements by class name
document.querySelectorAll('#cat'); //Getting the elements by Id
document.querySelectorAll('div'); //Getting the elements by tagname

const theBlueCatInsideCat = document.querySelector('#cat .blue-cat');
theBlueCatInsideCat.innerText = "I'm a blue cat";

//Target the img tag (there's only one)
//Change the src attribute to https://placekitten.com/g/200/400
const img = document.querySelector('img');
//document.getElementsByTagName('img');
img.src = "https://placekitten.com/g/200/400";
img.alt = "this is a cat";
img.setAttribute('somename', 'somevalue');

