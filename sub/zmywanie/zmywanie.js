var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [
    '#112F41',
    '#068587',
    '#4FB99F',
    '#F2B134',
    '#ED553B'
]

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})

function Rect(x, y) {
    this.x = x;
    this.y = y;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function () {
        c.strokeStyle = "black"
        c.fillStyle = this.color
        c.fillRect(x,y,10,10)
        c.stroke()
    }

    this.update = function () {
        //interactivity
        var losowy = "rgba(0,0,0,0)"
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y > -50 && mouse.y - this.y < 50) {
            this.color = losowy}
        this.draw();
    }
}

console.log(rectangles);
var rectangles = [];
function init() {
    rectangles = [];
        for (let y = 0; y < 416; y+=10) {
            for (let x = 0; x < 312; x+=10) {
                rectangles.push(new Rect(x, y))
            }
            x =0 ;
        }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].update();
        
    }
}
init()
animate()