var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var gravity = .1;
var friction = .9;

var wymiar = 100
var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    init()
})

function Square(x, y, dx, dy, friction,color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy;
    this.wymiar = wymiar
    this.friction = friction
    this.color = color


    this.draw = function () {
               c.fillStyle = color;
        c.fillRect(this.x, this.y, this.wymiar, this.wymiar);
    }

    this.update = function () {
        if (this.y + this.wymiar>= innerHeight) {
            this.dy = -(this.dy * this.friction);
            this.dx = this.dx * this.friction;
            this.y = innerHeight - this.wymiar //linia po to aby sie obiekty w scianie nie zacinaly
        }
        else {
            this.dy += gravity
        }
        if (this.x <= 0 || this.x >= innerWidth - this.wymiar) {
            this.dx=-this.dx
        }
        if (this.x >= innerWidth - this.wymiar) {
            this.x = innerWidth - this.wymiar
        }
        this.y += this.dy;
        this.x += this.dx;
        this.draw()
    }
}

var kwadraty = [];

function init() {
    var losowy = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
    x = mouse.x
    y = mouse.y
    dy = 2;
    dx = -10
    friction = .7
    kwadraty.push(new Square(x,y,dx,dy,friction,losowy))
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < kwadraty.length; i++) {
        kwadraty[i].update();

    }
}
init()
animate()