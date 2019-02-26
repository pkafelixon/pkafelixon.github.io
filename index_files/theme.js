var general_color = "#def2f1";
var win_color = "#ff8064";
var dark = 0;

function Theme() {
    if (dark == 0) {
        changeCSS("pkafelixon.github.io\index_files\style_dark.css", 0);
        general_color = "#616161";
        dark = 1;
    }
    else {
        changeCSS("pkafelixon.github.io\index_files\style_light.css", 0);
        general_color = "#def2f1";
        dark = 0;
    }
    for (i = 9; i > 0; i--) { document.getElementById("d" + i).style.backgroundColor = general_color; }
}
function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}