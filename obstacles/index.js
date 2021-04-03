const canvas = document.getElementById('obstacles');
const context = canvas.getContext('2d');

let obstacles = [];

const gameArea = {
    frames: 0,
    start: function() {
       this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    score: function() {
        let points = 0;
        if (this.frames > 150) {
            points = Math.floor(this.frames/5); 
        }
       // const points = Math.floor(this.frames/5);
        context.font = '10px Arial';
        context.fillStyle = 'black';
        context.fillText(`Score: ${points}`, 350, 50);
    }
}

function updateGameArea() {
    gameArea.clear();
    player.newPos(); //Setting new position of player 
    player.update(); //Redrawing the player
    updateObstacles();
    checkGameOver(); //as the game runs, keep checking if the game is over
    gameArea.score();
}

class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedY = 0;
        this.speedX = 0;
    }

    update() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

    crashWith(obstacle) {
        //compare obstacle with this (represents this instance)
        //checks where there is no collition and add a not operator
        //return true if there's a collision
        //return false if there's no collision
      return !(this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right())
    }
}

const player = new Component(30, 30, 'red', 0, 110);

document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38: //key code corresponds to the up arrow
            player.speedY -=1;
        break;
        case 40: 
            player.speedY += 1;
        break;
        case 37: 
            player.speedX -= 1;
        break;
        case 39: 
            player.speedX += 1;
        break;
    }
});

 document.addEventListener('keyup', () => {
      player.speedX = 0;
      player.speedY = 0;
 });


 //Create obstacles and move them periodically
function updateObstacles() {
    obstacles.forEach((obstacle) => {
        obstacle.x -= 1;
        obstacle.update();
    });

    gameArea.frames+=1;
    if (gameArea.frames % 120 === 0) {
        console.log('create a new obstacle');
        const minHeight = 20;
        const maxHeight = 160;
        const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight +1) + minHeight)
        const minGap = 50;
        const maxGap = 80;
        const randomGap = Math.floor(Math.random() * (maxGap - minGap +1) + minGap)

        //Create top obstacle
        const obstacleTop = new Component(10, //width
            randomHeight, //obstacle is shorter or longer
            'green', //color
            canvas.width, //where we start drawing them X
            0  //where we start drawing them Y
        )
        obstacles.push(obstacleTop);

        //Create bottom obstacle
        const obstacleBottom = new Component(10, //width
            canvas.height - (randomHeight + randomGap), //obstacle is shorter or longer
            'green',
            canvas.width,
            randomHeight + randomGap) //where we start drawing them Y
        
        obstacles.push(obstacleBottom);

        console.log(obstacles);
    }
}

function checkGameOver() {
    //Some is an array function (map, filter, reduce)
    //That when returns true it stops the loop
    const crashed = obstacles.some((obstacle) => {
        return player.crashWith(obstacle);//when this is true, the loop is stopped
    });

    if (crashed) {
        gameArea.stop();
    }

}

gameArea.start();