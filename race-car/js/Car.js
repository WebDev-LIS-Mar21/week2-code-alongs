class Car {
    constructor() {
        this.x = 220;
        this.y = 650;
        this.width = 50;
        this.height = 50;

        // const image = new Image();
        // image.src = './images/car.png';
        //  image.addEventListener('load', () => {
        //      this.image = image;
        // //     this.draw();
        //  });
    }

    draw() {
        const image = new Image();
        image.src = './images/car.png';
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    moveCar(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 20) {
                    this.x -= 10;
                }
            break;
            case 39: 
                if (this.x < 430) {
                    this.x += 10
                }
            break;
        }
    }
}