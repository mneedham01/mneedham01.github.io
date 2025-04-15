// this function takes a menu item, enlarges it & bedazzles it, 
// while concurrently shrinking the memories menu
function enlarge(id) {
    // enlarge current & bedazzle 
    elem = document.getElementById(id);
    elem.style.height = "100%";
    elem.src = "../photos/" + id + "_bedazzled.png";

    // shrink memories
    things_to_love = document.getElementById("memories");
    things_to_love.style.height = "90%";
    things_to_love.src = "../photos/memories.png";
}

// this function takes a menu item, shrinks it & de-bedazzles, 
// while concurrently re-setting the memories menu
function shrink(id) {
    elem = document.getElementById(id);
    elem.style.height = "90%";
    elem.src = "../photos/" + id + ".png";

    // enlarge memories
    things_to_love = document.getElementById("memories");
    things_to_love.style.height = "100%";
    things_to_love.src = "../photos/memories_bedazzled.png";
}