let currentGame;
let obstaclesFrequency = 0;
let animationId;
const raceCanvas = document.getElementById('race');
const context = raceCanvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    startGame();
}

document.addEventListener('keydown', (e) => {
    currentGame.car.moveCar(e.keyCode);
});



function startGame() {
    document.getElementById('game-board').style.display  = 'block';
    //Instantiate a new game
    currentGame = new Game();
    //Instantiate a new car
    currentCar = new Car();
    currentGame.car = currentCar;
    currentGame.car.draw();
    cancelAnimationFrame(animationId);//cancel any animation
    //that might exist from the previous game
    updateCanvas();
}

function detectCollision(obstacle) {
    return !((currentGame.car.x > obstacle.x + obstacle.width) ||
     (currentGame.car.x + currentGame.car.width < obstacle.x) ||
     (currentGame.car.y > obstacle.y + obstacle.height));
 }

function updateCanvas() {
    context.clearRect(0, 0, raceCanvas.width, raceCanvas.height);
    currentGame.car.draw();
    obstaclesFrequency++;
    if (obstaclesFrequency % 100 === 1) {
        const randomObstacleX = Math.floor(Math.random() * 450);
        const randomObstacleY = 0;
        const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
        const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
        const newObstacle = new Obstacle(
            randomObstacleX,
            randomObstacleY,
            randomObstacleWidth,
            randomObstacleHeight
        );
        currentGame.obstacles.push(newObstacle);
    }

    currentGame.obstacles.forEach((obstacle, index) => {
        obstacle.y += 1;
        obstacle.draw();

        if (detectCollision(obstacle)) {
            currentGame.gameOver = true;
            obstaclesFrequency = 0;
            currentGame.score = 0;
            document.getElementById('score').innerHTML = 0;
            currentGame.obstacles = [];
            document.getElementById('game-board').style.display = 'none';
            cancelAnimationFrame(animationId);
            alert('BOOOM!');

        }

        if (obstacle.y > raceCanvas.height) {
            currentGame.score++;
            document.getElementById('score').innerHTML = currentGame.score;
            currentGame.obstacles.splice(index, 1);
        }
    });

    if (!currentGame.gameOver) {
        animationId = requestAnimationFrame(updateCanvas); 
        //Calling update canvas every 60fps
    }
}