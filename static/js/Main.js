document.getElementById("button").addEventListener("click", addCommand);
var commands = [];

console.log(addCommand());
function addCommand (){
    //console.log("hiS");
    fetch('http://localhost:5000/', {method: "POST"})
        .then(function(response) {
            return response.text();
        })
        .then(function(response){
            var toAdd = response;
            console.log(toAdd);
            commands.push(toAdd)
            console.log(commands)
        })
}

function removeCommand (){
    commands.shift();
}

function createCommandElement (command){
    if (command.equals('up')){
        const elem = document.createElement('img');
        elem.src = "../images/upArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
    } else if (command.equals('down')){
        const elem = document.createElement('img');
        elem.src = "../images/downArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
    } else if (command.equals('left')){
        const elem = document.createElement('img');
        elem.src = "../images/leftArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
    } else if(command.equals('right')){
        const elem = document.createElement('img');
        elem.src = "../images/rightArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
    }
}
    