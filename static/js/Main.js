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