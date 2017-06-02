(function() {
  'use strict';

  function Traveler(name, food, isHealthy) {
    this.name = name
    this.food = food;
    this.isHealthy = isHealthy;

    //set up to pass in food from hunt and eat method on lines 45 & 51.
    this.setFood = function(newFood) {
      this.food = food + newFood;
    }
  }

  function Wagon(capacity) {
    this.passengers = [];
    this.capacity = capacity;

    //needs to be defined in Wagon for use in method join(wagon, traveler) line 54.
    this.addpassengers = function(traveler) {
      this.passengers.push(traveler);
    }
  }
  //constructors set up and brackets closed.  Then create methods.  if this.(public), if var(private) and create getters and setters.

  function makeTraveler(name) {
    //defining value for food
    let food = Math.trunc(Math.random() * 100);

    //below creates a function so when calling to isHealthy() return output.
    //defining value for isHealthy
    let isHealthy = function() {
      if (this.food > 20) {
        return true;
      } else {
        return false;
      }
    }
    //place values in properties for each Traveler
    return new Traveler(name, food, isHealthy);
  }

  function makeWagon(capacity) {
    return new Wagon(capacity);
  }

  function hunt(traveler) {
    if (Math.random() <= 0.5) {
      traveler.setFood(100);
    }
  }

  function eat(traveler2) {
    traveler2.setFood(-20);
  }

  function join(wagon, traveler) {
    wagon.addpassengers(traveler);
  }
  //need to loop thru each passengers food to determine it if they are sick or not.
  function quarantine(wagon) {
    for (var i = 0; i < wagon.passengers.length; i++) {
      if (wagon.passengers[i].food < 20) {
        return true;
      }
    }
    // return false must be outside of loop.  If inside loop and 1st passenger is false.  Process would stop and not eval the 2nd passenger.
    return false;
  }

  function food(wagon) {
    var total = 0;
    for (var i = 0; i < wagon.passengers.length; i++) {
      // console.log("FOOD: Passenger count: " + wagon.passengers.length + " -- Current Passenger: " + i + " -- Food: " + wagon.passengers[i].food);
      //Used above to determine if working correctly.
      total += wagon.passengers[i].food;
    }
    return total;
  }

  //   // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  //   // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  //   // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  join(wagon, traveler2);

  console.log("SOMEONE IS SICK? " + quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log("REMAINING FOOD: " + food(wagon)); // print juan's food + henrietta's food

})();
