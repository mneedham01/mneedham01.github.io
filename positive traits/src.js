function enlarge(id) {
    // enlarge current & bedazzle 
    elem = document.getElementById(id);
    elem.style.height = "100%";
    elem.src = "../photos/" + id + "_bedazzled.png";

    // shrink things to love 
    shrink("things_to_love");
}

function shrink(id) {
    elem = document.getElementById(id);
    elem.style.height = "90%";
    elem.src = "../photos/" + id + ".png";
    // enlarge things to love 
    enlarge("things_to_love")
}