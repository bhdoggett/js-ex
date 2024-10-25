// var UsersModule = function () {
//   var users = [];

//   var addUser = function (user) {
//     users.push(user);
//   };

//   var listUsers = function () {
//     for (var i = 0; i < users.length; i += 1) {
//       console.log(users[i].get("name"));
//     }
//   };

//   return {
//     addUser: addUser,
//     listUsers: listUsers,
//   };
// };

// var UserModule = function (name, email) {
//   var attributes = {
//     name: name,
//     email: email || null,
//   };

//   var getAttribute = function (attribute) {
//     if (attributes.hasOwnProperty(attribute)) {
//       return attributes[attribute];
//     }
//     console.log({attributes:attribute});
//   };

//   var setAttribute = function (attribute, value) {
//     if (attributes.hasOwnProperty(attribute)) {
//       attributes[attribute] = value;
//     }
//   };

//   return {
//     get: getAttribute,
//     set: setAttribute,
//   };
// };

// var learnToCodeRDU = UsersModule();

// var aaron = UserModule("Aaron", "aaron@projectshift.com");
// var sean = UserModule("Sean", "sean@projectshift.io");

// learnToCodeRDU.addUser(aaron);
// learnToCodeRDU.listUsers();

// var triangleJavaScript = UsersModule();

// var stacey = UserModule("Stacey", "stace@codeforfun.com");
// var jimbo = UserModule("Jimbo", "jimbo@gmail.com");

// triangleJavaScript.addUser(stacey);
// triangleJavaScript.addUser(jimbo);

// var parsity = UsersModule();
// var ben = UserModule('Ben', 'bdoggett@gmail.com')
// parsity.addUser(ben);
// parsity.listUsers();
// ben.set('height', "6 feet 1 inch");
// ben.get('height');

//----------------------------------------------------

// THIS

// var counter = {
//   count: 0,

//   updateCounter: function () {
//     this.count += 1;
//   },
// };

// counter.updateCounter();
// counter.updateCounter();
// counter.updateCounter();

// alert(counter.count);

//----------------------------------------------------

// var cat = {
//   makeNoise: function () {
//     alert(this.noise);
//   },
//   noise: "Meow!",
// };

// var dog = {
//   makeNoise: cat.makeNoise,
//   noise: "Woof!",
// };

// cat.makeNoise();
// dog.makeNoise();

// var person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       this.hungry = false;
//       alert("Im no longer hungry!");
//     }
//   },
// };

// person.feed();

//----------------------------------------------------

// var pump = function (amount) {
//   this.liters += amount;
//   console.log("You put " + amount + " liters in " + this.name);
// };

// var garage = {
//   car1: {
//     name: "Audi",
//     liters: 3,
//     fillTank: pump,
//   },
//   car2: {
//     name: "Mercedes",
//     liters: 1,
//     fillTank: pump,
//   },
// };

// garage.car1.fillTank(2);
// console.log("Audi should have 5 liters: ", garage.car1.liters);

// garage.car2.fillTank(30);
// console.log("Mercedes should have 31 liters: ", garage.car2.liters);

//----------------------------------------------------

// var pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// var airplane = {
//   fuel: 0,
//   fly: function () {
//     if (this.fuel < 2) {
//       return "on the ground!";
//     } else {
//       return "flying!";
//     }
//   },
// };

// console.log("The plane should not be able to fly (yet): " + airplane.fly());

// pumpFuel(airplane);

// console.log("The plane should STILL not be able to fly: " + airplane.fly());

// pumpFuel(airplane);
// console.log("Can it fly now? " + airplane.fly());

//----------------------------------------------------

// Create a method called stealCoins that takes a number parameter and decreases the tipJar's coins by that amount:

// var tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },
//   stealCoins: function (coins) {
//     this.coinCount -= coins;
//   },
// };

// tipJar.tip();
// console.log("Wishing well should have 21 coins: " + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log("Wishing well should have 18 coins: " + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log("Wishing well should have 8 coins: " + tipJar.coinCount);

//----------------------------------------------------

// var revealSecret = function () {
//   return this.secret;
// };

// var shoutIt = function (person, func) {
//   person.revealItAll = func;
//   var result = person.revealItAll();
//   alert(person.name + " said: " + result);
// };

// var aaron = {
//   name: "Aaron",
//   secret: "Im scared of heights!",
// };

// var sarah = {
//   name: "Sarah",
//   secret: "My middle name is Darlene!",
// };

// shoutIt(aaron, revealSecret);
// shoutIt(sarah, revealSecret);

//----------------------------------------------------

// BINDING 'THIS'

// let cat = {
//   sound: "meow",
//   talk: function () {
//     console.log(this.sound);
//   },
// };

// let talkFunction = cat.talk;
// talkFunction(); // undfined because 'this' isn't defined when we write the function, it's defined when we execute the funciton.

// cat.talk(); // 'this' works properly or you can add 'bind', see below

// let cat = {
//   sound: "meow",
//   talk: function () {
//     console.log(this.sound);
//   },
// };

// let talkFunction = cat.talk.bind(cat);
// talkFunction(); // meow

//-------------------------------------------------------------------------------

// 'THIS' EXERCISE
/*Use the following code to complete this exercise. Complete the makeDrink function to enable this coffee shop to operate. The makeDrink function should:

- Only make a drink if it's a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don't make DRINKNAME".
- If the drink is part of the drinkRequirements object, reduce the amount of beans by the number of beans required for that drink.
- If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".

*/

// var coffeeShop = {
//   funds: 100,
//   beans: 40,
//   drinks: {
//     latte: { price: 4, beanRequirement: 10 },
//     americano: { price: 3, beanRequirement: 5 },
//     doubleShot: { price: 6, beanRequirement: 15 },
//     frenchPress: { price: 5, beanRequirement: 12 },
//   },
//   makeDrink: function (drinkType) {
//     if (!this.drinks[drinkType]) {
//       return alert(`Sorry, we don't make ${drinkType}s!`);
//     }

//     if (this.beans >= this.drinks[drinkType].beanRequirement) {
//       this.beans -= this.drinks[drinkType].beanRequirement;
//       alert(`here's your ${drinkType}!`);
//       console.log(`Remaining beans: ${this.beans}`);
//     } else {
//       alert(`Sorry, we don't have enough beans to make a ${drinkType}`);
//     }
//   },
//   buyDrink: function (drinkType) {
//     if (this.drinks[drinkType]) {
//       this.funds += this.drinks[drinkType].price;
//       this.makeDrink(drinkType);
//     }
//   },
//   buyBeans: function (spend) {
//     var beanCost = 0.1;
//     if (this.funds >= spend) {
//       this.beans += spend / beanCost;
//       this.funds -= spend;
//       alert(`The Coffee Shop now has ${this.beans} beans!`);
//       console.log(`Funds: ${this.funds}`);
//     } else {
//       alert(`We don't have that much money!`);
//     }
//   },
// };

// coffeeShop.buyDrink("latte"); // - 10 beans
// coffeeShop.buyDrink("americano"); // - 5 beans
// coffeeShop.buyDrink("pourOver"); // 'sorry we don't make that'
// coffeeShop.buyDrink("doubleShot"); // - 15 beans
// coffeeShop.buyDrink("frenchPress"); // 'sorry we don't have enough beans!

// coffeeShop.buyBeans(10);
// coffeeShop.buyBeans(200);

// coffeeShop.buyDrink("latte");

//-------------------------------------------------------------------------------

// ARRAY HELPER METHODS

//-------------------------------------------------------------------------------

// FOR EACH()

// var numbers = [1, 2, 3, 4, 5];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// var numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// // Adding it to the Array's prototype so we can call it directly on arrays
// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// // Adding it to the Array's prototype so we can call it directly on arrays
// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// var numbers = [1, 2, 3, 4, 5];

// numbers.myForEach(function (number) {
//   console.log(number);
// });

//-------------------------------------------------------------------------------

// // refactor the above code with a .forEach() method
// var users = [
//   { id: 15, name: "Bob" },
//   { id: 23, name: "Jimbo" },
//   { id: 35, name: "Cathy" },
// ];

// users.forEach(function (user) {
//   console.log("saving", user.name);
// });

// parsity answer:
// var saveUser = function (user) {
//   console.log("saving", user.name);
// };

// var saveUsers = function () {
//   var users = [
//     { id: 15, name: "Bob" },
//     { id: 23, name: "Jimbo" },
//     { id: 35, name: "Cathy" },
//   ];

//   users.forEach(function (u) {
//     //
//     saveUser(u);

// for (var i = 0; i < users.length; i++) {
//   // console.log(users[i].name);
//   saveUser(users[i]);
// }
//   });
// };

// saveUser();

// var saveUser = function (user) {
//   console.log("saving", user.name);
// };

// var saveUsers = function () {
//   var users = [
//     { id: 15, name: "Bob" },
//     { id: 23, name: "Jimbo" },
//     { id: 35, name: "Cathy" },
//   ];

//   var looper = function (u) {
//     saveUser(u);
//   };

//   users.forEach(looper);
// };

// saveUser();

//-------------------------------------------------------------------------------

// // Use forEach() to store the box volumes in a volumes array
// var boxes = [
//   { length: 10, width: 15, height: 20 },
//   { length: 15, width: 20, height: 25 },
//   { length: 20, width: 25, height: 30 },
//   { length: 25, width: 30, height: 35 },
//   { length: 30, width: 35, height: 40 },
// ];

// var volumes = [];

// boxes.forEach(function (index) {
//   var volume = index.length * index.width * index.height;
//   volumes.push(volume);
// });

// console.log(volumes);
