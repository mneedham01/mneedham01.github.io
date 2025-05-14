// this function replaces the content given the clicked button
function content (id) {
    var buttons = document.getElementById("container").children;
    // loop through the items in content-container 
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        if (button.id == id) {
            button.style.visibility = "visible";
        } else {
            button.style.visibility = "hidden";
        }
    }
}

