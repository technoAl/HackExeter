document.getElementById("button").addEventListener("click", addCommand);

var commands = [];

function addCommand (){
    fetch('http://localhost:5000/')
        .then(function(response) {
            var toAdd = response.text();
            commands.push(toAdd);
        })
}

addCommand();
console.log(commands);