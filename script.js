
function start() {
    document.getElementById("myPlacesDiv").innerHTML = "hello";
    var selectPlaces = "Select places: <br>";
    for(var i = 0;  i <= places.length - 1; i++){
        selectPlaces += "<input type='checkbox' id='checkbox" + i +"'>" + places[i].name + "<br>";
    }
    selectPlaces += "<button class='button' onclick='input()'>Optimize!</button>";
    document.getElementById("myPlacesDiv").innerHTML = selectPlaces
}


var chosenPlaces = [];

function input(){
    chosenPlaces = [];
    var finalList = "You are going to: <br>";
    for(var i = 0;  i <= places.length - 1; i++){
        if(document.getElementById("checkbox" + i).checked){
            chosenPlaces.push(places[i]);
            finalList += places[i].name + "<br>";
        }
    }
    console.log(chosenPlaces);
    document.getElementById("myPlacesDiv").innerHTML = finalList;
}

function optimize(){
    var combinations = [];
    chosenPlaces[];
    for(var i = 0;  i <= places.length - 1; i++){

    }
}