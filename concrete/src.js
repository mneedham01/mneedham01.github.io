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
    console.log("in here");
    var background = document.getElementById("body");
    var pic_num = randomNumber();
    // check to make sure the current pic is not the same as the last
    while (pic_num == lastPic) {
        pic_num = randomNumber();
    }
    var pic_name = "url(images/" + pic_num + ".jpg)";

    background.style.backgroundImage = pic_name;
    lastPic = pic_num;
}

function randomNumber(){
    var min = 1; 
    var max = 13;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}