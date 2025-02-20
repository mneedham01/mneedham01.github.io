

// identify star 
star = document.getElementById("star"); 
// initialize variables
var side; 
var top;
var left;
var starting_quadrant; 

// set initial position of star 
setInitialPos(star);
// set star to be visible 
star.style.visibility = "visible";

function setInitialPos(star) {
    // decide whether star is coming from left or from right
    // starts as random, then alternates 
    if (side === undefined) {
        side = Math.random() > 0.5 ? "left" : "right";
    }
    side = (side == "right") ? "left" : "right";


    // decide the vertical axis
    // choose random top value between 10 and 100 
    const min = 10;
    const max = 80;
    top = Math.floor(Math.random() * (max - min + 1)) + min;
    star.style.top = top + "%";

    // declare variable for upper/lower 
    starting_quadrant = (top > (max - min) / 2) ? "upper" : "lower"; 

    if (side == "left") {
        left = -30;
        star.style.left = -30 + "%";

        // flip image 
        if (starting_quadrant == "upper") {
            star.transform.scaleX = -1;
        } 
        if (starting_quadrant == "lower") {
            star.transform.scale = (-1, 1);
        }
    }

    if (side == "right") {
        left = 130;
        star.style.left = 130 + "%";

        // flip bottom image 
        if (starting_quadrant == "lower") {
            star.transform.scaleY = -1;
        }
    }
}



setInterval(
    function frame() {
        // if it has reached the other side 
        if (side == "left" && left == 130 || side == "right" && left == -30) {
            clearInterval(id);
        } else {
             moveStar(star);
        }
        function moveStar(star) {
            // star moves according to the side it starts on & where it started on that side
            if (side == "left" && starting_quadrant == "upper") {
                top ++; 
                left ++; 
            } 
            if (side == "left" && starting_quadrant == "lower") {
                top --;
                left ++; 
            }
            if (side == "right" && starting_quadrant == "upper") {
                top ++;
                left --; 
            }
            if (side == "right" && starting_quadrant == "lower") {
                top --;
                left --;
            }
            star.style.top = top + "%";
            star.style.left = left + "%";        
        }
    }, 10);



// var id = null;

// function myMove(){
//     var star = document.getElementById("star"); 
//     var top = 10;
//     var left = 100;
    
//     clearInterval(id);
//     id = setInterval(frame, 10);

//     function frame() {
//         if (left == -30) {
//             clearInterval(id);
//         } else {
//             top ++;
//             left --;
//             star.style.top = top + "%";
//             star.style.left = left + "%";
//         }
//     }

// }