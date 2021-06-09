// Code your solution in this file!

function distanceFromHqInBlocks(numberOfStreet){
    let numberOfBlocks;
    if (numberOfStreet >= 42) {
        numberOfBlocks = numberOfStreet - 42;
    } else if (numberOfStreet <= 42) {
        numberOfBlocks = 42 - numberOfStreet;}
    return numberOfBlocks;
}

function distanceFromHqInFeet(numberOfStreet){
    return distanceFromHqInBlocks(numberOfStreet) * 264;
}

function distanceTravelledInFeet(a, b){
    let distanceInFeet;
    if (a < b){
        distanceInFeet = b - a;
    } else if (a > b) {
        distanceInFeet = a - b;
    }
    return distanceInFeet * 264
}

function calculatesFarePrice(start, destination){
    let FarePrice;
    if (distanceTravelledInFeet(start, destination) < 400) {
         FarePrice = distanceTravelledInFeet(start, destination) * 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        FarePrice = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        FarePrice = 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        FarePrice = 'cannot travel that far'
    }
    return FarePrice
}
