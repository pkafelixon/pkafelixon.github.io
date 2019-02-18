<?php include $_SERVER['DOCUMENT_ROOT'].'/head.php'; ?>
<html>
<head>
    <title>Kolko i krzyzyk</title>
</head>
<body>
    <div id="container" style="padding:70px;">
        <script>
        var width = (parent.innerWidth / 10);
        var height = (parent.innerHeight / 10);
        var sum = height * width;
        console.log(height);
        console.log(width);
        console.log(sum);
        for (var i = 0; i < sum; i++) {
            var div = document.createElement("div");
            div.className = "pixele";
            div.id = "p" + i;
            div.setAttribute("onmouseenter", "kolor(this.id)")
            document.getElementById("container").appendChild(div);
        }
        function kolor(id) {
            document.getElementById(id).style.backgroundColor = "#ff0bdf";
        }
        for (var i = width-16; i < sum; i += width-16) {
            document.getElementById("p" + i).style.clear = "both";
        }
        </script>
    </div>
</body>

</html>