
function start() {
    document.getElementById("myPlacesDiv").innerHTML = "hello";
    var selectPlaces = "Select places: <br>";
    for(var i = 1;  i <= names.length - 1; i++){
        selectPlaces += "<input type='checkbox' id='checkbox" + i +"'>" + names[i] + "<br>";
    }
    selectPlaces += "<button class='button' onclick='input()'>Optimize!</button>";
    document.getElementById("myPlacesDiv").innerHTML = selectPlaces
}


var chosenPlaces = [];

function input(){
    chosenPlaces = [];
    var finalList = "You are going to: <br>";
    for(var i = 1;  i <= names.length - 1; i++){
        if(document.getElementById("checkbox" + i).checked){
            chosenPlaces.push(i);
            finalList += names[i] + "<br>";
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
        totDist += distances[i][i + 1];
    }

    // add distance from home to first place
    totDist += distances[0][array[0]];

    // add distance from home to last place
    totDist += distances[0][array[array.length - 1]];

    return totDist;
}

function print_route(array) {
    var route_list = "Home, ";

    for (i=0; i < array.length; i++) {
        route_list += names[array[i]] + ", ";
    }

    route_list += "Home";

    document.getElementById("optimal").innerHTML += route_list;
}

function optimize() {
    var route = chosenPlaces.sort();
    var opt_route = route;
    var opt_dist  = dist(route);
    var done = false;

    if (route.length < 1) {
        console.log("You did not choose any places to visit");
        return;
    }

    console.log("Chosen places: ");
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
    document.getElementById("optimal").innerHTML = "<br> Optimal Route: <br>";
    print_route(opt_route);
    document.getElementById("optimal").innerHTML += "<br><br>Optimal Distance: <br>" + Math.round(opt_dist * 10 ) / 10 + " miles";

}
