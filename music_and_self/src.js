// this function will create a new iframe 
// it will then put the code into this iframe 
function nextSnippet(id) {
    // find the path name 
    var path = id + ".html";
    var doc = window.parent.document;
    var iframe = doc.createElement("iframe");
    iframe.setAttribute("src", path);
    iframe.setAttribute("class", "frame");
    // append a line break 
    linebreak = doc.createElement("br");
    var body = doc.getElementById("body");
    body.appendChild(linebreak);
    // append iframe 
    body.appendChild(iframe);
}