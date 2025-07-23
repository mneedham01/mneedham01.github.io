// setInterval(function rotatePictures() {
//     var background = document.getElementById("body");
//     // choose random pic 
//     var min = 1; 
//     var max = 13;
//     var pic_num = Math.floor(Math.random() * (max - min + 1)) + min;
//     var pic_name = "url(images/" + pic_num + ".jpg)";

//     background.style.backgroundImage = pic_name;

// }, 5000);

function changePic() {
    console.log("in here");
    var background = document.getElementById("body");
    var min = 1; 
    var max = 13;
    var pic_num = Math.floor(Math.random() * (max - min + 1)) + min;
    var pic_name = "url(images/" + pic_num + ".jpg)";

    background.style.backgroundImage = pic_name;
}