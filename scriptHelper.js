// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */


 }
 
 function validateInput(testInput) {

    if (testInput === '' || testInput === 0) {

            return "Empty";

    } else if (isNaN(testInput)) {

            return "Not a Number";

    } else if (typeof(testInput) === 'number') {

            return "Is a Number";

    }

}
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus'); 
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    
    // Check that values entered into the form are valid
    if (validateInput(pilot) === 'Empty' || validateInput(pilot) === 'Is a Number') {

        alert("Please Enter a valid Pilot Name.");

    } else if (validateInput(copilot) === 'Empty' || validateInput(copilot) === 'Is a Number') {

        alert("Please Enter a valid Co-Pilot Name.");

    } else if (validateInput(fuelLevel) === 'Empty' || validateInput(fuelLevel) === 'Not a Number') {

        alert("Please Enter a valid Fuel Level.");

    } else if (validateInput(cargoLevel) === 'Empty' || validateInput(cargoLevel) === 'Not a Number') {

        alert("Please Enter a valid Cargo Level.");

    }

    // Check Shuttle Requirements. If requirements are not met, display them in faultyItems with red launchStatus (fuelLevel must be 10000 or higher, cargoMass must be 10000 or less). If requirements are met, display them in faultyItems with green launchStatus

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {

        fuelStatus.innerHTML = 'Fuel level too low for launch';
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        launchStatus.style.color = 'red';


    } else if (cargoLevel > 10000) {

        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        launchStatus.style.color = 'red';

    } else {

        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';

    }

    list.visible = true;
    
 }
 
 async function myFetch() {
    
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

        return response.json();

    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {

    return Math.random(planets.length);

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;