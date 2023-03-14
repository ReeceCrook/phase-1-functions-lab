// Code your solution in this file!
function distanceFromHqInBlocks(number){
    let distance
    if (number < 42){
        distance = (number - 42) * -1
        console.log(distance)
        return distance
    }
    else{
        distance = number - 42
        console.log(distance)
        return distance
    }
}

function distanceFromHqInFeet(number){
    let blocks = distanceFromHqInBlocks(number) 
    let feet = blocks * 264
    return feet

}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        let distance = (start - destination) * 264 * -1
        console.log(distance)
        return distance
    }
    else{
        let distance = (start - destination) * 264
        console.log(distance)
        return distance
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        let fee = 0
        return fee
    }
    else if(distance > 400 && distance <= 2000){
        let fee = (distance - 400) * 0.02
        return fee

    }
    else if(distance > 2000 && distance <= 2500){
        let fee = 25
        return fee
    }
    else(distance > 2500);{
        let message = "cannot travel that far"
        return message
    }
}
calculatesFarePrice()