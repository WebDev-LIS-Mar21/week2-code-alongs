console.log('JS Connected');

//1. Get the paragraph and change its text to 
//"Tell me your name"
const paragraph = document.getElementById('paragraph');
paragraph.innerText = "Tell me your name";

//2. Change the href of the anchor tag to https://www.google.com
const anchorNew = document.getElementById('google-link');
anchorNew.href = 'https://www.google.com';

//Create a new element
const h2Tag = document.createElement('h2');
h2Tag.innerText = "Happy to have you here";
const body = document.querySelector('body');
body.prepend(h2Tag);

//3. Create a paragraph with text "I'm leaning JavaScript"
//Add it to the div with id content
const content = document.getElementById('content');
const p = document.createElement('p');
p.innerText = "I'm learning JavaScript";
content.appendChild(p);

//Add sibling
const h1First = document.getElementById('title');
const h1Second = document.createElement('h1');
h1Second.innerText = "I'm inside the second heading"
content.insertBefore(h1Second, h1First);

//Inserting HTML inside element
const unorderedList = document.getElementById('item-list');
//unorderedList.innerHTML = '<li>item 1</li><li>item 2</li>';

//Remove elements
document.querySelector('#title').remove();

//4. Remove the h2 tag
//document.querySelector('h2').remove();
h2Tag.remove();

const addItemButton = document.getElementById('add-item-button');
let counter = 1;
function addItem() {
    if (counter > 4) {
        alert('No more items, please!');
        return;
    }
    const newListItem = document.createElement('li');
    newListItem.innerText = `Item ${counter}`;
    unorderedList.appendChild(newListItem);
    newListItem.addEventListener('click', () => {
    //  event.currentTarget.remove();
        counter--;
        newListItem.remove();
    });
    counter++;
}

addItemButton.addEventListener('click', addItem);


function deleteLi() {
    console.log('Deleting');
}

const sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', () => {
    //Grab the input
    const username = document.getElementById('username');
    console.log(username.value);

    //Send some feedback to the user
    const feedback = document.getElementById('sendEmail');
    feedback.innerText = `An email was sent to ${username.value}`;
    username.value = "";
});





