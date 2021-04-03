 console.log('JS connected');

 const canvas = document.getElementById('example');
 const context = canvas.getContext('2d');

//=> Rectangle filled with color
context.fillStyle = 'purple';
context.fillRect(260, 260, 30, 30);
                //x    y    w   h

//=> Rectangles without being filled
context.strokeStyle = 'green';
context.strokeRect(50, 50, 50, 50);

context.strokeStyle = '#C0C0C0';
context.strokeRect(70, 70, 80, 50);

//Paths -> A list of connected point segments
//straight lines, arches, triangles

//Stroke this will draw a line
context.beginPath();
context.moveTo(100, 100); //moving the pen to point where you start drawing
context.lineTo(250, 50);
context.lineTo(40, 40);
context.strokeStyle = 'red';
context.stroke();
context.closePath();

//Fill it will fill out the shape
context.beginPath();
context.moveTo(75, 50);
context.lineTo(100, 75);
context.lineTo(100, 25);
context.fill(); //=> Don't need to close the path when using fill

//Arc
context.beginPath();
context.arc(150, 100, 50, 0, Math.PI * 2);
context.lineWidth = 20;
context.strokeStyle = 'green';
context.stroke();
context.closePath();

context.beginPath();
context.arc(150, 100, 30, 0, Math.PI * 2);
context.lineWidth = 10;
context.strokeStyle = 'purple';
context.stroke();
context.closePath();

//Text
context.font = '30px Arial';
context.fillStyle = 'blue';
context.lineWidth = 1;
context.strokeText('Hello World', 10, 50);

//Image
const cat = new Image();
cat.src = 'http://placekitten.com/g/100/100';
cat.onload = function() { //waiting for the image to be loaded, before drawing it on canvas
    //context.drawImage(cat, 50, 10, 100, 100);
}

function draw(x) {  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(cat, x, 30, 100, 100);
    x+= 3;

    setTimeout(() => {
        draw(x); //Call draw every second //Recursive function
    }, 30);
}

draw(0);





