
function start() {
    document.getElementById("myPlacesDiv").innerHTML = "hello";
    var selectPlaces = "Select places: <form action='action_page.php' method='get' id = 'myPlacesSelect'><br>";
    for(var i = 0;  i <= places.length - 1; i++){
        selectPlaces += "<input type='checkbox' value=" + i +">" + places[i].name + "<br>";
    }
    selectPlaces += "<input type='submit' value='Submit'></form><br><button class='button' onclick='optimize()'>Optimize!</button>";
    document.getElementById("myPlacesDiv").innerHTML = selectPlaces
}

function optimize(){
    console.log(document.getElementById("myPlacesSelect").value);
}