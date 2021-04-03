const canvas = document.getElementById('player');
const context = canvas.getContext('2d');

class Ghost {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        const image = new Image();
        image.src = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c316.png';
        image.addEventListener('load', () => { //wait for image to load before draw
            this.image = image;
            this.draw();
        });
    }

    draw() {
        context.drawImage(this.image, this.x, this.y, 50, 50);
    }

    moveUp() {
        this.y -= 25;
    }

    moveDown() {
        this.y +=25;
    }

    moveLeft() {
        this.x -= 25;
    }

    moveRight() {
        this.x += 25;
    }
}

const player1 = new Ghost(150, 50);

// const player2 = new Ghost(250, 50);
// const player3 = new Ghost(450, 25);

document.addEventListener('keydown', (e) => {
    console.log(e);
    switch(e.keyCode) { //=> the code of the key we are pressing
        case 38: //Up cursor key
            player1.moveUp();
        break;
        case 40: //down cursor key
            player1.moveDown();
        break;
        case 37: //left cursor key
            player1.moveLeft();
        break;
        case 39: //right cursor key
            player1.moveRight();
        break;
    }
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw();
});