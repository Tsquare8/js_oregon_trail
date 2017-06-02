(function() {
  'use strict';

//this is the contructor method but only if I want to pass in parameters when creating a object.
//     function Traveler(){
//       this.name
//       this.food
//       this.isHealthy
//
// }
//
// let traveler = new Traveler()
//But need to add values to properties by
//traveler.name = "bob";
//traveler.food = 300;
//traveler.isHealthy = true;
// let traveler2 = new Traveler()
///
/////OR OR OR

//     function Traveler(name, food, isHealthy){
//       this.name = name;
//       this.food = food;
//       this.isHealthy = isHealthy;
// }
// let traveler = new Traveler("bob", 300, true);


//object literal - spell out properties
// Traveler = {}
// Traveler. amount = 20;
// Traveler.name = "bob";
// Traveler.isHealthy = true;

//Will create a copy of Traveler above
// Traveler1 = Object.create(Traveler);

// //ES6 way
// class Traveler{
//   contructor(name, amount, isHealthy) {
//     this.name = name;
//     this.food = amount;
//     this.isHealthy = isHealthy;
//   }
// //Methods. Can say Travler.makeBed()
//   makesBed(){
//
//   }
//
//   eats(){
//
//   }
// }
//
// travelerOne = new Traveler()
//
// class Nomad extends Traveler {
//
// }
//
//
//


  //////////////////////////////////////////////////////////

//function Traveler(name, amtFood, isHealthy)
//   //   this.name = name;
//   //   this.food = amtFood;
//   //   this.isHealthy = isHealthy;
//   //
//   //
//   //
//   //   //
//   //   // this.hunt = function() {
//   //   //   if (Math.random() <= 0.5){
//   //   //     this.food = this.food + 100;
//   //   //   } else {
//   //   //     this.food = this.food
//   //   //   }
//   //   // }
//   }
//
// function makeTraveler(name){
//     return new Traveler(name, amtFood, isHealthy);
//   // let amountOfFood = Math.random() * 1000;
//   // this.isHealthy = function() {
//   //   if(amountOfFood > 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   }
//
//
//
//
//   // Create a wagon called 'wagon'
//   // let wagon = makeWagon(5);
//   // Create a traveler with the name 'Henrietta' called 'traveler'
//   let traveler = makeTraveler('Henrietta');
//   // Create a traveler with the name 'Juan' called 'traveler2'
//   let traveler2 = makeTraveler('Juan');
//
//   console.log(Traveler);
//
//   // hunt(traveler); // maybe get more food
//   // eat(traveler2);
//   // eat(traveler2); // juan is hungry
//   // join(wagon, traveler);
//   // join(wagon, traveler2);
//   //
//   // console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
//   // console.log(food(wagon)); // print juan's food + henrietta's food

})();
