document.getElementById("button").addEventListener("click", addCommand);

var commands = [];

function addCommand (){
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
        var img = document.createElement("img");
    } else if (command.equals('down')){

    } else if (command.equals('left')){

    } else if(command.equals('right')){

    }
}
    