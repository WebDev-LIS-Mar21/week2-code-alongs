const canvas = document.getElementById('animations');
const context = canvas.getContext('2d');

function drawRectangle(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

let speed1 = 450;
let speed2 = 450;
let speed3 = 450;

//Function that will draw shapes on canvas
function updateCanvas() {
    speed1-=1;
    speed2-=2;
    speed3-=3;
    
    clearCanvas();

    drawRectangle(100, speed1, 50, 50, 'red');
    drawRectangle(200, speed2, 50, 50, 'blue');
    drawRectangle(300, speed3, 50, 50, 'green');

    // setTimeout(() => {
    //     updateCanvas();
    // }, 60);
    requestAnimationFrame(updateCanvas);
    //The function is called aprox. 60 time per second

}

updateCanvas();


