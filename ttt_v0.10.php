<?php include $_SERVER['DOCUMENT_ROOT'].'/head.php'; ?>
<html>

<head>
    <title>Kolko i krzyzyk</title>
</head>

<body>
    <div id=ttt>
        <div class=kafle id="textbox">Tura X</div>
        <div class=kafle id="restart" onclick="restart()">RESET
        </div>
        <script>

        // tworzenie pol do gry
        for (var i = 1; i < 10; i++) {
            var div = document.createElement("div");
            div.className = "kafle";
            div.id = "d" + i;
            div.setAttribute("onclick", "gra(this.id)")
            document.getElementById("restart").parentNode.insertBefore(div, document.getElementById("restart"));
        }

        tab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var koniec_gry = 0;
        var tura = 0;
        var tb = document.getElementById("textbox");

        function restart() {
            tura = 0;
            koniec_gry = 0;
            tab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 9; i > 0; i--) {
                document.getElementById("d" + i).innerHTML = "";
                document.getElementById("d" + i).style.backgroundColor = general_color;
            }
            tb.innerHTML =
                '<button id=b1 class="b_kafle" onclick="nowa_gra(0)">X</button><button id=b2 class="b_kafle" onclick=nowa_gra(1)>O</button>'
        }

        function gra(id) {
            var divid = document.getElementById(id);
            if (koniec_gry == 0 && tab[id[1] - 1] == 0) {
                if (tura == 1) {
                    tab[id[1] - 1] = 1
                    tb.innerHTML = 'Tura X'
                    divid.innerHTML = '<img src="./index_files/O.png" style="width:120px;height:120px;">';
                    tura = 0;
                } else{
                    tab[id[1] - 1] = 2
                    tb.innerHTML = 'Tura O'
                    divid.innerHTML = '<img src="./index_files/X.png" style="width:120px;height:120px;">';
                    tura = 1;
                }
              }
        czy_wygrana();
        }

        function czy_wygrana() {
            var lista = [1, 4, 7, 2, 5, 8, 3, 6, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 7, 1, 5, 9];
            for (i = 0; i < 24; i += 3) {
                if (tab[lista[i] - 1] == tab[lista[i + 1] - 1] && tab[lista[i + 1] - 1] == tab[lista[i + 2] - 1] && tab[
                        lista[i + 2] - 1] != 0) {
                    wygrana(lista[i], lista[i + 1], lista[i + 2])
                }
            }
            console.log(tab)
            if (tab[0] != 0 && tab[1] != 0 && tab[2] != 0 && tab[3] != 0 && tab[4] != 0 && tab[5] != 0 && tab[6] != 0 &&
                tab[7] != 0 && tab[8] != 0 && koniec_gry == 0) {
                remis()
            }
        }

        function wygrana(x, y, z) {
            koniec_gry = 1;
            document.getElementById("d" + x).style.backgroundColor = win_color;
            document.getElementById("d" + y).style.backgroundColor = win_color;
            document.getElementById("d" + z).style.backgroundColor = win_color;
            if (tab[x - 1] == 1) {
                tb.innerHTML = 'O Wygrywa'
            } else if (tab[x - 1] == 2) {
                tb.innerHTML = 'X Wygrywa'
            }
        }

        function remis() {
            tb.innerHTML = 'Remis'
        }

        function nowa_gra(tura) {
            this.tura = tura
            if (tura == 0) {
                tb.innerHTML = 'Tura X'
            } else {
                tb.innerHTML = 'Tura O'
            }
        }
        </script>
</body>

</html>