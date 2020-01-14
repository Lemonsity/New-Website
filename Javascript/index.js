var directoryHistory = [];

function reset() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
    let div = document.createElement("div");
    div.setAttribute("class", "command_Line")
    {
        var leadup = document.createElement("span");
        leadup.setAttribute("style", "color: #4E9A06");
        leadup.appendChild(document.createTextNode("lemonsity@lemonsitysTerminal"));

        var follow = document.createElement("span");
        follow.setAttribute("style", "color: #FFFFFF");
        follow.appendChild(document.createTextNode(":"));

        { // setup directory
            var directory = document.createElement("span");
            directory.setAttribute("style", "color: #368DBF");
            directoryHistory = ["~"];
            directory.appendChild(document.createTextNode(lastDirectory()));
        }

        follow.appendChild(directory);
        follow.appendChild(document.createTextNode("$ "));
    }
    div.appendChild(leadup);
    div.appendChild(follow);
    document.body.appendChild(div);
}

function lastDirectory() {
    return directoryHistory[directoryHistory.length - 1];
}