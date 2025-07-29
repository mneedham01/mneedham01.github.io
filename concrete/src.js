// setInterval(function rotatePictures() {
//     var background = document.getElementById("body");
//     // choose random pic 
//     var min = 1; 
//     var max = 13;
//     var pic_num = Math.floor(Math.random() * (max - min + 1)) + min;
//     var pic_name = "url(images/" + pic_num + ".jpg)";

//     background.style.backgroundImage = pic_name;

// }, 5000);

var lastPic = 1;

function changePic() {
    var background = document.getElementById("body");
    // put background to red for 3 seconds 
    background.style.backgroundColor = "red";
    background.style.backgroundImage = "none";
    setTimeout(function () {
        var pic_num = randomNumber(1, 13);
        // check to make sure the current pic is not the same as the last
        while (pic_num == lastPic) {
            pic_num = randomNumber(1, 13);
        }
        var pic_name = "url(images/" + pic_num + ".jpg)";

        background.style.backgroundImage = pic_name;
        lastPic = pic_num;
    }, 800);
}

function randomNumber(min, max){
    console.log('min = '+min + "max"+max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// called when red square is clicked or when page is loaded 
function change_scenery() {
    // change concrete
    changePic();

    // random sizing 
    var red = document.getElementById("square");
    // generate random red square size 
    // in between 5 vh/w and 30 vh/w
    var heightNum = randomNumber(5, 30);
    var widthNum = randomNumber(5, 30);
    // convert to strings 
    var heightStr = heightNum + "vh";
    var widthStr = widthNum + "vw";
    // set to div 
    red.style.height = heightStr;
    red.style.width = widthStr;

    // random positioning 
    // between 5 and 95- height for the top value 
    var topNum = randomNumber(5, (95 - heightNum));
    // between 5 and 95 - width for the left value 
    var leftNum = randomNumber(5, (95 - widthNum));
    // convert to strings 
    var topStr = topNum + "vh";
    var leftStr = leftNum + "vw";
    // set to div 
    red.style.top = topStr;
    red.style.left = leftStr;

}


// calls this function on load 
window.onload = change_scenery;