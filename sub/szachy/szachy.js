class Piece {
    constructor(id, type,colour) {
        this.id = id;
        this.type = type;
        this.colour = colour;
        this.draw = function () {
            document
                .getElementById(this.id)
                .innerHTML = '<img src="./' + this.type + "_" + this.colour + '.png" height="100%">';
        };
    }
}

function boardCreate() {
    var i = 1;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            var style = "";
            var div = document.createElement("div");
            div.className = "szachy";
            div.id = "c" + i;
            if (gonnaClear) {
                style += "clear:both;";
            }
            if (row % 2 == col % 2) {
                style += "background-color:#f6ddac;";
            }
            div.style = style;
            div.setAttribute("onclick", "gra(this.id)");
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

function piecesCreate() {
    pieces = [];
    localPieces();
    localPieces(48, 8,"black");

    function localPieces(a = 0, b = 0,colour = "white") {
        var type = "pawn"
        for (i = 1; i <= 16; i++) {
            switch (i - b) {
                case 1:
                case 8:
                    type = "rook"
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
            pieces.push(new Piece(("c" + (i + a)), type, colour));
        }
    }
}

function main() {
    for (let i = 0; i < pieces.length; i++) {
        pieces[i].draw();
    }
}








function gra(id) {
    console.log(id);

}

{
    boardCreate();
    piecesCreate();
    main();
}