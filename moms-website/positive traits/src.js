// this function takes a menu item, enlarges it & bedazzles it, 
// while concurrently shrinking the things_to_love menu
function enlarge(id) {
    // enlarge current & bedazzle 
    elem = document.getElementById(id);
    elem.style.height = "100%";
    elem.src = "../photos/" + id + "_bedazzled.png";

    // shrink things to love 
    things_to_love = document.getElementById("things_to_love");
    things_to_love.style.height = "90%";
    things_to_love.src = "../photos/things_to_love.png";
}

// this function takes a menu item, shrinks it & de-bedazzles, 
// while concurrently re-setting the things_to_love menu
function shrink(id) {
    elem = document.getElementById(id);
    elem.style.height = "90%";
    elem.src = "../photos/" + id + ".png";

    // enlarge things to love 
    things_to_love = document.getElementById("things_to_love");
    things_to_love.style.height = "100%";
    things_to_love.src = "../photos/things_to_love_bedazzled.png";
}