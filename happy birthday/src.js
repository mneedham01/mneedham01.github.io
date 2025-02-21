// find the star 
const star = document.getElementById("star");
// intialize side as left, so that the first star will always come from the right when it gets swapped  
var side = "left"; 

// set up interval to make a shooting star every 5 seconds 
setInterval(function makeStarShoot() {
    // switch up the side that it's coming from 
    side = (side == "right") ? "left" : "right";
    // call function that will bring animation
    starShoot(side);
}, 3000);

// this function will make the animation happen 
function starShoot(start_side) {
    // set up the initial position of the star 
    // left (distance from left of screen), determined by what side it starts on
    var current_left = initiateLeft(start_side);
    star.style.left = current_left + "%";
    // top (distance from top of screen)
    var current_top = initiateTop(); 
    star.style.top = current_top + "%";
    // quadrant (whether it is in upper or lower portion)
    var start_quadrant = getQuadrant(current_top);
    // rotate the star according to where it starts from 
    transform(start_side, start_quadrant);
    // then, make visible! 
    star.style.visibility = "visible";

    // then, start the animation 
    var min = 5; 
    var max = 20;
    var interval = Math.floor(Math.random() * (max - min + 1)) + min;
    var id = setInterval(shoot, interval);

    function shoot() {
        // if you have reached the target location, which depends on the side  
        if (atTarget(start_side, current_left)) {
            clearInterval(id);
        } else {
            // then, we need to move the piece 
            if (side == "left" && start_quadrant == "upper") {
                current_top ++; 
                current_left ++; 
            } 
            if (side == "left" && start_quadrant == "lower") {
                current_top --;
                current_left ++; 
            }
            if (side == "right" && start_quadrant == "upper") {
                current_top ++;
                current_left --; 
            }
            if (side == "right" && start_quadrant == "lower") {
                current_top --;
                current_left --;
            }
            star.style.top = current_top + "%";
            star.style.left = current_left + "%";   
        }
    }
}

// this function will choose the starting distance from the left of the screen
// basically, it will give the % number for left or right 
function initiateLeft(start_side){
    // if it starts on the left, then start it at -30. if right, then 130. 
    var left = (start_side == "left") ? -30 : 130;
    return left; 
}

// this function will choose the starting distance from the top of the screen
function initiateTop() {
    // random number between the min and the max 
    const min = 10;
    const max = 80;
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// this function determines if the star is in the upper or lower quadrant 
function getQuadrant(start_top) {
    // if the start_top is less than the mid-way line, then it is upper 
    // otherwise, lower! 
    if (start_top < 45) {
        return "upper";
    } else {
        return "lower";
    }
}

// this function will turn the star the appropriate direction as to where it's heading 
function transform(start_side, start_quadrant) {
    // upper left 
    if (start_quadrant == "upper" && start_side == "left") {
        star.style.transform.scaleX = - 1; 
    }
    // lower left 
    if (start_quadrant == "lower" && start_side == "left") {
        star.style.transform.scale = (- 1, - 1); 
    }
    // upper right does not need to transform
    // lower right 
    if (start_quadrant == "lower" && start_side == "right") {
        star.style.transform.scaleY = - 1;
    }
}

// this function will tell you whether you have hit the end of the animation, 
// depending on what side you started on 
function atTarget(start_side, current_left) {
    if ((start_side == "left" && current_left == 130) || (start_side == "right" && current_left == -30)) {
        return true;
    } else {
        return false; 
    }
}

// this function will change pic of mom to the one with hearts 
function addHearts() {
    var pic = document.getElementById("mom");
    pic.src = "../photos/momwithhearts.png";
}

function takeAwayHearts() {
    var pic = document.getElementById("mom");
    pic.src = "../photos/mom.png";
}
