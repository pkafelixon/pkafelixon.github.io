//0=pawn 1=rook 2=knight 3=bishop 4=queen 5=king
wMoves = [[+10], [+1, +2, +3, +4, +5]];
bMoves = [[-10]];
var d = document;

class Piece {
  constructor(id, type, number, colour) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.colour = colour;
    this.draw = function () {
      d.getElementById(this.id).innerHTML =
        '<img src="./' + this.type + '_' + this.colour + '.png" height="100%">';
    };
    this.move = (newId) => {
      d.getElementById(this.id).innerHTML = '';
      this.id = newId;
      d.getElementById(this.id).innerHTML =
        '<img src="./' + this.type + '_' + this.colour + '.png" height="100%">';
    };
    this.select = function () {
      var x = [];
      if (this.colour == 'white') {
        var avMoves = wMoves;
      } else {
        var avMoves = bMoves;
      }
      let i = 0;
      do {
        console.log(avMoves[this.number][i]);

        x.push(+this.id.substr(1) + +avMoves[this.number][i]);
        i++;
      } while (i < avMoves[this.number].length);
      x.forEach((element) => {
        selectTiles('c' + element);
        console.log('c' + element);
      });
    };
  }
}

function selectTiles(id) {
  if (d.getElementById(id).style.backgroundColor == 'rgb(173, 216, 230)') {
    d.getElementById(id).style = previousColor;
  } else {
    var previousColor = d.getElementById(id).style.backgroundColor;
    d.getElementById(id).style = 'background-color:#add8e6;';
  }
}

function createBoard() {
  var i = 1;
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      var div = d.createElement('div');
      div.id = 'c' + row + col;
      div.className += 'szachy ';
      if (row % 2 == col % 2) {
        div.className += 'light_tile ';
      } else {
        div.className += 'dark_tile ';
      }
      if (gonnaClear) {
        div.className += 'cb ';
      }
      div.setAttribute('onclick', 'clickCheck(this.id)');
      d.getElementById('restart').parentNode.insertBefore(
        div,
        d.getElementById('restart')
      );
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
  localPieces(7, 0, 'black');

  function localPieces(a = 0, b = 1, colour = 'white') {
    var type = 'pawn';
    var number = 0;
    for (row = b; row <= b + 1; row++) {
      for (col = 1; col <= 8; col++) {
        switch (row * 10 + col) {
          case 11:
          case 18:
            type = 'rook';
            number = 1;
            break;
          case 12:
          case 17:
            type = 'knight';
            number = 2;
            break;
          case 13:
          case 16:
            type = 'bishop';
            number = 3;
            break;
          case 14:
            type = 'queen';
            number = 4;
            break;
          case 15:
            type = 'king';
            number = 5;
            break;
          default:
            type = 'pawn';
            number = 0;
            break;
        }
        pieces[(row + a) * 10 + col] = new Piece(
          'c' + ((row + a) * 10 + col),
          type,
          number,
          colour
        );
      }
    }
    for (let i = 0; i < pieces.length; i++) {
      if (pieces[i] != undefined) {
        pieces[i].draw();
      }
    }
  }
}
var freeMoves = false;
var isClicked;

function clickCheck(clickedTile) {
  if (pieces[clickedTile.substr(1)] != undefined && !isClicked) {
    isClicked = true;
    indexOfPiece = clickedTile.substr(1);
    pieces[indexOfPiece].select();
  } else if (indexOfPiece == clickedTile.substr(1)) {
    isClicked = false;
    pieces[indexOfPiece].select();
  } else if (isClicked) {
    isClicked = false;
    move(indexOfPiece, clickedTile);
  }
}
function move(indexOfPiece, clickedTile) {
  if (
    document.getElementById(clickedTile).style.backgroundColor !=
      'rgb(173, 216, 230)' &&
    !freeMoves
  ) {
    isClicked = false;
    pieces[indexOfPiece].select();
  } else if (indexOfPiece != clickedTile.substr(1)) {
    pieces[indexOfPiece].select();
    pieces[clickedTile.substr(1)] = pieces[indexOfPiece];
    pieces[clickedTile.substr(1)].move(clickedTile);
    pieces[indexOfPiece] = undefined;
  }
}
{
  createBoard();
  createPieces();
}
