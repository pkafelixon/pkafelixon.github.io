function dark_theme() {
    var sticky = document.getElementById("sticky").classList
    var main = document.getElementById("main_container").classList
    if (sticky.contains('dark_theme') && main.contains('dark_theme')) {
        sticky.add('light_theme');
        main.add('light_theme');
        sticky.remove('dark_theme');
        main.remove('dark_theme');
    }
    else {
        sticky.add('dark_theme');
        main.add('dark_theme');
        sticky.remove('light_theme');
        main.remove('light_theme');
    }
} 