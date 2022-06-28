// Code your solution in this file!
// 1 block = 264 feet


function distanceFromHqInBlocks(location){
    let hqLocation = 42;
    let distanceFromHq = 0;
    distanceFromHq = location - hqLocation;
    return Math.abs(distanceFromHq);
}

function distanceFromHqInFeet(distanceInBlocks){ 
    let blocks = distanceFromHqInBlocks(distanceInBlocks);
    let feetConversion = 0;
    feetConversion = blocks * 264;
    return Math.abs(feetConversion);
}

function distanceTravelledInFeet(start, destination){
    let distanceInFeet = 0;
    distanceInFeet = (start - destination) * 264;
    return Math.abs(distanceInFeet);
}

function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    let fareCost = 0;
    if (distanceInFeet < 400){
        fareCost = 0;
    }
    else if (distanceInFeet >=400 && distanceInFeet <=2000){
        fareCost = .02 * distanceInFeet - 8.00;
        fareCost = fareCost.toFixed(2);
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        fareCost = 25;
    }
    else if (distanceInFeet > 2500){
        return `cannot travel that far`;
    }
return Math.abs(fareCost);
}

