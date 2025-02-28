// figure changes randomly every 5 seconds -- needs to be some time consistency
// maybe in another iteration, can change this by performer 
// randomly cycles 
const figure_ids = ["1", "2", "3", "4", "5", "6"];
var prev_id;

setInterval(function figureAppears() {
    // then, choose a random new id 
    var min = 0; 
    var max = 5;
    var id = figure_ids[Math.floor(Math.random() * (max - min + 1)) + min];
    // change the source to the current id 
    document.getElementById("figure").src = "../photos/score_pieces/figure" + id + ".png";
    // make it visibile if it wasn't already 
    if (prev_id == null) {
        document.getElementById("figure").style.visibility = "visible";
    }
    // set prev_id to current 
    prev_id = id;
}, 5000)
