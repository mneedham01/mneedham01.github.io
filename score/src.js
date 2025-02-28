// scroll across the screen in random order, connected back to back 
const figure_ids = ["1", "2", "3", "4", "5", "6"];
var prev_id;
const element1 = document.getElementById("figure1");
const element2 = document.getElementById("figure2");
var prev_element = 1;

setInterval(function figureAppears() {
    // alternates between the two elements 
    var element = prev_element == 1 ? element2 : element1;
    // then, choose a random new id 
    var min = 0; 
    var max = 5;
    var id = figure_ids[Math.floor(Math.random() * (max - min + 1)) + min];
    // change the source to the current id 
    element.src = "../photos/score_pieces/figure" + id + ".png";
    // set to visible 
    element.style.visibility = "visible";
    // set prev_id to current 
    prev_id = id;
    // set prev_element 
    prev_element = element.id == "figure1" ? 1 : 2;

    // then, animate it 
    // go from left = 100% to - 100%
    element.animate (
        {
            left: ["100%", "-100%"]
        }, 10000,
    );
}, 5000)
