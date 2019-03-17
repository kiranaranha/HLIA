
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
    console.log(chosenPlaces);
    document.getElementById("myPlacesDiv").innerHTML = finalList;
    optimize();
}


function nextPermutation(array) {

    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return false;

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

    return true;
}

function cost(array) {

}

function optimize() {
    var a = chosenPlaces.sort();

    nextPermutation(a);
    console.log(a);
}
