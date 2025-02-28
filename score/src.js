// scroll across the screen in random order, connected back to back 
const figure_ids = ["1", "2", "3", "4", "5", "6"];
const element1 = document.getElementById("figure1");
const element2 = document.getElementById("figure2");
const element3 = document.getElementById("figure3");
const element4 = document.getElementById("figure4");
const element5 = document.getElementById("figure5");
const element_array = [element1, element2, element3, element4, element5];
var element_array_id = 0;

// calls function the first time 
window.addEventListener("load", figureAppears());

// calls it subsequently
setInterval(function callFigureAppears () {
    figureAppears();
}, 3000);

function figureAppears() {
    // alternates between the five elements as containers 
    var element = element_array[element_array_id];
    // then, choose a random new source for the image 
    var min = 0; 
    var max = 5;
    var id = figure_ids[Math.floor(Math.random() * (max - min + 1)) + min];
    // change the source
    element.src = "../photos/score_pieces/figure" + id + ".png";
    // set to visible if it was hidden 
    element.style.visibility = "visible";
    // set new element_array_id, looping around if it's at 2 
    element_array_id = element_array_id == 4 ? 0 : element_array_id + 1;

    // then, animate it 
    // go from left = 100% to - 100%
    element.animate (
        {
            left: ["100%", "-110%"]
        }, 20000,
    )
}
