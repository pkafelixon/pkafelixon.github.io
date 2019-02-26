var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillRect(x,y,width,height);
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
//     var y = Math.random() * window.innerHeight;
//     var losowy = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = losowy
//     c.stroke()
// }
// , dx, dy, radius


// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

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