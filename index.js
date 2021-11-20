function askUserForAge() {
    let userAge = prompt(`How old are you?`)
    return userAge
}

function askForDistnceOfTravelling(){
    let distanceTravelling = prompt("Enter the distance you wnt to travell:")
    return distanceTravelling
}

function doTicketPrice() {
    let ticketPrice = distanceTravelling * 0.21
    return ticketPrice
}

function findThePrice() {
    if (userAge > 0 && userAge < 18)
    return (ticketPrice * 0.8).toFixed(2)
    else if (userAge < 65 && userAge > 18)
    return ticketPrice.toFixed(2)
    else if ((userAge > 65 && userAge < 120))
    return (ticketPrice * 0.6).toFixed(2)
    else return (`Please enter your correct age.`)
}

let userAge = askUserForAge()
let distanceTravelling = askForDistnceOfTravelling()
let ticketPrice = doTicketPrice()

alert(`Your ticket will cost £${findThePrice()}.`)
