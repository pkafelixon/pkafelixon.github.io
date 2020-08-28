var general_color = "#fff";
var win_color = "var(--body-bg-colour)";
var combinations = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function createBoard() {
  document.title = "Tic Tac Toe";
  container = document.getElementsByClassName("container")[0];
  container.classList.add("ttt");
  boardFrame = ["textbox", "game", "restart"];
  boardFrame.forEach((element) => {
    div = document.createElement("div");
    div.id = element;
    container.appendChild(div);
  });

  div.setAttribute("onclick", "restart()");
  div.innerHTML = "Restart";

  for (var i = 0; i < 9; i++) {
    div = document.createElement("div");
    div.id = "d" + i;
    div.setAttribute("onclick", "game(this.id)");
    document.getElementById("game").appendChild(div);
  }
}

function write(string) {
  document.getElementById("textbox").innerHTML = string;
}

function restart() {
  turn = 0;
  gameEnded = 0;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 8; i >= 0; i--) {
    tile = document.getElementById("d" + i);
    tile.innerHTML = "";
    tile.removeAttribute("style");
  }
  write("Zaczyna X");
}

function game(id) {
  let clickedTile = document.getElementById(id);
  if (!gameEnded && !board[id[1]]) {
    if (turn) {
      board[id[1]] = 1;
      write("Tura X");
      clickedTile.innerHTML = '<img src="../../index_files/O.png">';
    } else {
      board[id[1]] = 2;
      write("Tura O");
      clickedTile.innerHTML = '<img src="../../index_files/X.png">';
    }
    turn = !turn;
  }
  winCheck();
  drawCheck();
}

function winCheck() {
  for (let i = 1; i <= 2; i++) {
    combinations.forEach((element) => {
      if (element.every((e) => board[e] == i)) {
        win(element);
      }
    });
  }
}

function drawCheck() {
  if (board.every((e) => e != 0) && !gameEnded) {
    write("Remis");
  }
}

function win(lista) {
  gameEnded = 1;
  lista.forEach((element) => {
    tile = document.getElementById("d" + element);
    tile.style.backgroundColor = win_color;
  });
  if (board[lista[0]] == 1) {
    write("O Wygrywa");
  } else if (board[lista[0]] == 2) {
    write("X Wygrywa");
  }
}

createBoard();
restart();
