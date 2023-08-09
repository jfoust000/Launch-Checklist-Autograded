// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        let index = pickPlanet(listedPlanets);
        
        addDestinationInfo(window.document, listedPlanets[index].name, listedPlanets[index].diameter, listedPlanets[index].star, listedPlanets[index].distance, listedPlanets[index].moons, listedPlanets[index].image); 

    });

    let launchCheckForm = document.querySelector("form");

    launchCheckForm.addEventListener('submit', function (e) {
    
    e.preventDefault();

    let pilotName = document.querySelector('[name=pilotName]').value;
    let copilotName = document.querySelector('[name=copilotName]').value;
    let fuelAmount = Number(document.querySelector('[name=fuelLevel]').value);
    let cargoAmount = Number(document.querySelector('[name=cargoMass]').value);
    let faultyItems = document.getElementById('faultyItems');

    formSubmission(document, faultyItems, pilotName, copilotName, fuelAmount, cargoAmount);

    });
    
    
 });

