var gold = 1;

function opencardpack() {
    console.log("sup bois");
    gold++;
}

var currentScreen = "main-screen";
function chooseScreen(newScreen) {
    var cur_screen = document.getElementById(currentScreen);
    var new_screen = document.getElementById(newScreen);

    cur_screen.classList.remove("highlighted-screen");
    new_screen.classList.add("highlighted-screen");

    currentScreen = newScreen;
}