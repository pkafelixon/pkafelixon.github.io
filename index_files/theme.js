var dark = false;

function Theme() {
  if (dark) {
    changeCSS('index_files/dark.css', 0);
  } else {
    changeCSS('index_files/light.css', 0);
  }
  dark = !dark;
}

function changeCSS(cssFile, cssLinkIndex) {
  var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);

  var newlink = document.createElement('link');
  newlink.setAttribute('rel', 'stylesheet');
  newlink.setAttribute('type', 'text/css');
  newlink.setAttribute('href', cssFile);

  document.getElementsByTagName('head').item(0).replaceChild(newlink, oldlink);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('sticky').style.bottom = '0';
  } else {
    document.getElementById('sticky').style.bottom = '-70px';
  }
  prevScrollpos = currentScrollPos;
};
