// Write your JavaScript code here!

// window load event handler
window.addEventListener("load", function() {
    
    // Will hold array of planet objects
    let listedPlanets;

    // Stores promise after calling myFetch()
    let listedPlanetsResponse = myFetch();

    // Retrieve array of panet objects and store in listedPlanets
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        // Store a random single planet object
        let planet = pickPlanet(listedPlanets);
        
        // Pass document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, and planet.image to addDestinationInfo in scriptHelper.js which will display the random planet destination on page load
        addDestinationInfo(window.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image); 

    });

    // The form below destination
    let launchCheckForm = document.querySelector("form");

    // Handle submit event
    launchCheckForm.addEventListener('submit', function (e) {
    
    e.preventDefault();

    // Store input field values
    let pilotName = document.querySelector('[name=pilotName]').value;
    let copilotName = document.querySelector('[name=copilotName]').value;
    let fuelAmount = document.querySelector('[name=fuelLevel]').value;
    let cargoAmount = document.querySelector('[name=cargoMass]').value;
    let faultyItems = document.getElementById('faultyItems');

    // Pass document, faultyItems, and input field values to formSubmission in scriptHelper.js which will validate input and display launch status accordingly
    formSubmission(document, faultyItems, pilotName, copilotName, fuelAmount, cargoAmount);

    });
    
    
 });

