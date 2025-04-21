// this function will create a new iframe 
// it will then put the code into this iframe 
function firstSnippet(id) {
    // find the path name 
    var path = id + ".html";
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", path);
    iframe.setAttribute("class", "frame");
    // append a line break 
    linebreak = document.createElement("br");
    var body = document.getElementById("body");
    body.appendChild(linebreak);
    // append iframe 
    body.appendChild(iframe);
}

// this function will only put the code into the current iframe
function nextSnippet(id) {
    // find the path name 
    var path = id + ".html";
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", path);
    iframe.setAttribute("class", "frame-within");
    // append iframe 
    document.body.appendChild(iframe);
}