class Piece {
    constructor(id, type, colour) {
        this.id = id;
        this.type = type;
        this.colour = colour;
        this.draw = function () {
            document.getElementById(this.id).innerHTML =
                '<img src="./' + this.type + "_" + this.colour + '.png" height="100%">';
        };
        this.move = function (newId) {
            document.getElementById(this.id).innerHTML = "";
            this.id = newId;
            document.getElementById(this.id).innerHTML =
                '<img src="./' + this.type + "_" + this.colour + '.png" height="100%">';
        };
        this.select = function () {
            if (
                document.getElementById(this.id).style.backgroundColor ==
                "rgb(173, 216, 230)"
            ) {
                document.getElementById(this.id).style = previousColor;
            } else {
                var previousColor = document.getElementById(this.id).style
                    .backgroundColor;
                document.getElementById(this.id).style = "background-color:#add8e6;";
                
            }
        };
    }
}

function createBoard() {
    var i = 1;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            var div = document.createElement("div");
            div.id = "c" + i;
            if (row % 2 == col % 2) {
                div.className += "szachy_light";
            } else {
                div.className += "szachy_dark";
            }if (gonnaClear) {
                div.className += " cb";
            }
            div.setAttribute("onclick", "move(this.id)");
            document
                .getElementById("restart")
                .parentNode.insertBefore(div, document.getElementById("restart"));
            i++;
            gonnaClear = false;
        }
        var gonnaClear = true;
    }
}

var pieces = [];

function createPieces() {
    pieces = [];
    localPieces();
    localPieces(48, 8, "black");

    function localPieces(a = 0, b = 0, colour = "white") {
        var type = "pawn";
        for (i = 1; i <= 16; i++) {
            switch (i - b) {
                case 1:
                case 8:
                    type = "rook";
                    break;
                case 2:
                case 7:
                    type = "knight";
                    break;
                case 3:
                case 6:
                    type = "bishop";
                    break;
                case 4:
                    type = "queen";
                    break;
                case 5:
                    type = "king";
                    break;
                default:
                    type = "pawn";
                    break;
            }
            pieces[i + a] = new Piece("c" + (i + a), type, colour);
        }
    }
    console.log(pieces);
}

function main() {
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i] != undefined) {
            pieces[i].draw();
        }
    }
}

var clicked;

function move(divId) {
    empty = "empty";
    if (clicked) {
        clicked = false;
        if (pieceId != divId.substr(1)) {
            pieces[pieceId].select();
            pieces[divId.substr(1)] = pieces[pieceId];
            pieces[divId.substr(1)].move(divId);
            pieces[pieceId] = empty;
        }
    } else if (
        pieces[divId.substr(1)] != empty &&
        pieces[divId.substr(1)] != undefined
    ) {
        clicked = true;
        pieceId = divId.substr(1);
        pieces[pieceId].select();
    }
}

{
    createBoard
();
    createPieces
();
    main();
}