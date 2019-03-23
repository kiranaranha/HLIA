
function start() {
    // Start button
    document.getElementById("optimal").innerHTML = "";
    var selectPlaces = "<br><b>Select places:</b> <br>";
    for(var i = 1;  i <= data.names.length - 1; i++){
        selectPlaces += "<input type='checkbox' id='checkbox" + i +"'>" + data.names[i] + "<br>";
    }
    selectPlaces += "<br><button class='button' onclick='input()'>Optimize!</button>";
    document.getElementById("myPlacesDiv").innerHTML = selectPlaces
    document.getElementById("start").innerHTML = "";
    document.getElementById("reset").innerHTML = ""
}

var chosenPlaces = [];

function input(){
    // Choose places
    chosenPlaces = [];
    var finalList = "<br><b>You are going to:</b> <br>";
    for(var i = 1;  i <= data.names.length - 1; i++){
        if(document.getElementById("checkbox" + i).checked){
            chosenPlaces.push(i);
            finalList += data.names[i] + "<br>";
        }
    }

    document.getElementById("myPlacesDiv").innerHTML = finalList;
    optimize();
}

function nextPermutation(array) {

    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return true;

    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }

    return false;
}

function dist(array) {
    var i;

    totDist = 0.0;
    for (i = 0; i < array.length - 1; i++) {
        totDist += data.distances[i][i + 1];
    }

    // add distance from home to first place
    totDist += data.distances[0][array[0]];

    // add distance from home to last place
    totDist += data.distances[0][array[array.length - 1]];

    return totDist;
}

function print_route(array) {
    var route_list = "Home, ";

    for (i=0; i < array.length; i++) {
        route_list += data.names[array[i]] + ", ";
    }

    route_list += "Home";

    document.getElementById("optimal").innerHTML += route_list;
}

function optimize() {
    var route = chosenPlaces.sort();
    var opt_route = route;
    var opt_dist  = dist(route);
    var done = false;

    //console.log("Chosen places: ");
    print_route(route);

    while (!done) {
        done = nextPermutation(route);
        d = dist(route);
        if (d < opt_dist) {
            opt_route = route;
            opt_dist = d;
        }
    }

    // print optimal route
    document.getElementById("optimal").innerHTML = "<br> <b>Optimal Route:</b> <br>";
    print_route(opt_route);
    document.getElementById("optimal").innerHTML += "<br><br><b>Optimal Distance:</b> <br>" + Math.round(opt_dist * 10 ) / 10 + " miles";

    if (route.length < 1) {
        document.getElementById("myPlacesDiv").innerHTML = '';
        document.getElementById("optimal").innerHTML = "<br> You did not choose any places to visit!";
    }

    document.getElementById("reset").innerHTML = "<br><button class='button' onclick='start()'>Reset!</button>";
}
