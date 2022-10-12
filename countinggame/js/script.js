const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

class Raven {
    constructor(){
        this.Width = 100;
        this.Height= 50;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 3 ;
        this.directionY = Math.random() * 5 - 2.5;
    }
    update(){ 
        this.x -= this.directionX;
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.Width, this.Height);
    }
}



function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextRaven += deltaTime;
    if (timeToNextRaven > ravenInterval){
        Raven.push(new Raven());
        timeToNextRaven = 0;
    };
    [...ravens].forEach(object => object.update());
    [...ravens].forEach(object => object.draw());
    requestAnimationFrame(animate);
}
animate(); 