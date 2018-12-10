var gold = 1;

function opencardpack() {
    console.log("sup bois");
    gold++;
}

var currentScreen = "main-screen";
function chooseScreen(newScreen) {
    var iframe = document.getElementById("selectedScreen");
    var cur_screen = document.getElementById(currentScreen);
    var new_screen = document.getElementById(newScreen);

    cur_screen.classList.remove("highlighted-screen");
    new_screen.classList.add("highlighted-screen");

    iframe.setAttribute("src", "screens/" + newScreen.slice(0, -7) + ".html");

    currentScreen = newScreen;
}