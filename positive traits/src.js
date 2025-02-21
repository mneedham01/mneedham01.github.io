function enlarge(id) {
    elem = document.getElementById(id);
    elem.style.height = "100%";
    elem.src = "../photos/" + id + "_bedazzled.png";
}

function shrink(id) {
    elem = document.getElementById(id);
    elem.style.height = "90%";
    elem.src = "../photos/" + id + ".png";
}