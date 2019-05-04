
var commands = [];

while (true){
    addCommand();
    createCommandElement(commands[commands.length - 1])
}


function createCommandElementforReal(){
    for (i = 0; i < commands.length; i++){
        console.log(i);
        createCommandElement(commands[i]);
        
    }      
}


createCommandElementforReal();

console.log("print commands: " + commands)
//add a bunch of starting commands
function addCommand (){

    fetch('http://localhost:5000/', {method: "POST"})
        .then(function(response) {
            return response.text();
        })
        .then(function(response){
            var toAdd = response;
            console.log(toAdd);
            commands.push(toAdd)
            //console.log(commands)
        })
}

function removeCommand (){
    commands.shift();
}

function createCommandElement (command){
    console.log("a: " + command)
    if (command == "up"){
        const elem = document.createElement('img');
        elem.src = "../images/upArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
        console.log("added")
    } else if (command == "down"){
        const elem = document.createElement('img');
        elem.src = "../images/downArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
        console.log("added")
    } else if (command == "left"){
        const elem = document.createElement('img');
        elem.src = "../images/leftArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
        console.log("added")
    } else if(command == "right"){
        const elem = document.createElement('img');
        elem.src = "../images/rightArrow.png";
        const parentElement = document.getElementById('parent')// find the parent element
        parentElement.appendChild(elem);
        console.log("added")
    } else {
        console.log("failed")
    }
}
addCommand();
console.log("out")