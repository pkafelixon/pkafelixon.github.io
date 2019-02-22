var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillRect(x,y,width,wymiar);
// c.fillStyle = "#ff0000";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "#00ff00";
// c.fillRect(300, 400, 100, 100);
// c.fillStyle = "#0000ff";
// c.fillRect(200, 200, 100, 100);
// console.log(canvas);

// //Line
// c.beginPath();
// // c.moveTo(x,y)
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#f23a23";
// c.stroke();

// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = "purple"
// c.stroke()

// for (let i = 0; i < 20; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerwymiar;
//     var losowy = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = losowy
//     c.stroke()
// }
// , dx, dy, radius


// var x = Math.random() * innerWidth;
// var y = Math.random() * innerwymiar;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

//grawitacja
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