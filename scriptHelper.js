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
   
    let missionTargetDiv = document.getElementById('missionTarget');

    missionTargetDiv.innerHTML = `<h2>Mission Destination</h2>
                                  <ol>
                                      <li>Name: ${name}</li>
                                      <li>Diameter: ${diameter}</li>
                                      <li>Star: ${star}</li>
                                      <li>Distance from Earth: ${distance}</li>
                                      <li>Number of Moons: ${moons}</li>
                                  </ol>
                                  <img src=${imageUrl}>`;

 }
 
 function validateInput(testInput) {

 if (testInput === '') {

        return "Empty";

    } else if (isNaN(testInput) === true) {
        
        return "Not a Number";

    } else if (isNaN(testInput) === false) {

        return "Is a Number";

    } 
}
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus'); 
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    
    let allFieldsCorrect = false;
    let validNumbers = /^[0-9]{1,6}$/;
    let validLetters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/; 
    
    // Check that values entered into the form are valid
    if (validateInput(pilot) === 'Empty' || validateInput(pilot) === 'Is a Number') {

        alert("Please Enter a valid Pilot Name.");
        allFieldsCorrect = false;
    } else if (!pilot.match(validLetters)) {
        alert("Enter First Name, or First and Last Name with One Space Between.");
        allFieldsCorrect = false;
    } else if (validateInput(copilot) === 'Empty' || validateInput(copilot) === 'Is a Number') {

        alert("Please Enter a valid Co-Pilot Name.");
        allFieldsCorrect = false;
    } else if (!copilot.match(validLetters)) {
        alert("Enter First Name, or First and Last Name with One Space Between.");
        allFieldsCorrect = false;
    } else if (validateInput(fuelLevel) === 'Empty' || validateInput(fuelLevel) === 'Not a Number') {

        alert("Please Enter a valid Fuel Level.");
        allFieldsCorrect = false;
    } else if (!String(fuelLevel).match(validNumbers)) {
        alert("Please Enter a valid Fuel Level.");
        allFieldsCorrect = false;
    } else if (validateInput(cargoLevel) === 'Empty' || validateInput(cargoLevel) === 'Not a Number') {

        alert("Please Enter a valid Cargo Level.");
        allFieldsCorrect = false;
    } else if (!String(cargoLevel).match(validNumbers)) {
            alert("Please Enter a valid Cargo Level.");
            allFieldsCorrect = false;
    } else {

        allFieldsCorrect = true;

    }

    // Check Shuttle Requirements. If requirements are not met, display them in faultyItems with red launchStatus (fuelLevel must be 10000 or higher, cargoMass must be 10000 or less). If requirements are met, display them in faultyItems with green launchStatus
    if (allFieldsCorrect) {

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

         if (fuelLevel < 10000 && cargoLevel > 10000) {

            fuelStatus.innerHTML = 'Fuel level too low for launch';
            fuelStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red';
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            cargoStatus.style.color = 'red';

    
         } else if (fuelLevel < 10000) {

            fuelStatus.innerHTML = 'Fuel level too low for launch';
            fuelStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red';
            cargoStatus.style.color = '';


        } else if (cargoLevel > 10000) {

            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            cargoStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            launchStatus.style.color = 'red';
            fuelStatus.style.color = '';

        } else {

            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            launchStatus.innerHTML = 'Shuttle is Ready for Launch';
            launchStatus.style.color = 'green';
            cargoStatus.style.color = '';
            fuelStatus.style.color = '';


        }

        list.style.visibility = 'visible';
    }
    
}
 
 async function myFetch() {
    
     let planetsResponse;
 
     planetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

        return response.json();

    });
 
     return planetsResponse;
 }
 
 function pickPlanet(planets) {

 
    return planets[Math.floor(Math.random() * planets.length)];

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;