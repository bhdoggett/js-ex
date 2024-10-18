// // var convertWeight = function (number, unit) {
// //   if (typeof(number) === 'number' && unit === 'kilos') {
// //       return number * 2.20462
// //   } else if (typeof(number) === 'number' && unit === 'pounds') {
// //       return number / 2.20462
// // } else {console.log('error')}
// // }


// Math.roundTo = function(number, positions) {

//   return Number(number.toFixed(positions))
//   let numberString = number.toString();
//   let integersArray = Array.from(numberString.split(".")[0]);
  

//   for (let i = 0; i < numberString.length; i++) {
    
//     const element = array[i];
    
//   }

//   let decimalsArray = Array.from(numberString.split(".")[1]);
//   let roundedDecimalsArray = []
//   for (let i = 0; i < positions; i++) {
//     if (i !== positions - 1) {
//       roundedDecimalsArray.push(decimalsArray[i]);
//     } else {
//       if (decimalsArray[positions] < 5) {
//         roundedDecimalsArray.push(decimalsArray[i]);
//       } else {
//         roundedDecimalsArray.push((Number(decimalsArray[i]) + 1).toString());
//       }
//     }
//   }

//   return Number([...integersArray, ".",...roundedDecimalsArray].join(""))
// }

// Math.roundTo(309.86645, 2);

// console.log(Math.roundTo(3.1415926535, 4)); // 3.1416
// console.log(Math.roundTo(4, 5))
// console.log(Math.roundTo(4.1235343424, 6))
// console.log(Math.roundTo(5.3035802, 3))
// console.log(Math.roundTo(0.9384930193848595, 15))
// console.log(Math.roundTo(9.9999, 3))


// Math.roundTo(4, 5); // 4
// Math.roundTo(4.1235343424, 6); // 4.123534
// Math.roundTo(5.3035802, 3); // 5.304
// Math.roundTo(0.9384930193848595, 15); // 0.938493019384860
// Math.roundTo(9.9999, 3); // 10



// // calcAlge = (birthYear) => {
// // now = Date()
// //   return `You are either ${(new Date().getFullYear()) - birthYear} or ${(new Date().getFullYear()) - birthYear - 1}`;
// // }

// // var age = calcAlge(1985)

// // console.log(age)


// isPrime = (number) => {
//   let result = true;
//   for (let i = 2; i < number; i++) {
//     // console.log(number/i)
//     // console.log((number/i).toFixed(1)[((number/i).toFixed(1)).length - 1])
//     // console.log(Number(((number/i).toFixed(1)[((number/i).toFixed(1)).length - 1]) === 0))
//     // console.log('---')
//     if ((number/i).toFixed(1)[((number/i).toFixed(1)).length - 1] == 0) {
//     result = false;
//   }
// } return result
// }

// console.log(isPrime(18));




// var foo = function() {
//   var x = 1;

//   var bar = function() {
//     console.log(x);
//   };

//   return bar;
// };

// var baz = foo();
// baz();



// var setCounter = function(num) {
//   var counter = 0;

//   var count = function() {
//     counter += num;
//     console.log(counter);
//   };

//   increment(count);
// };

// var increment = function(fn) {
//   fn();
// };

// setCounter(2);


// Description
// Write a function called 'createCounter' that returns an object with two methods: 'increment' and 'decrement'.
// Both methods should modify a private 'count' variable, and return the current count when called.
// The catch: You must ensure the variable remains private using closure.
// For example:

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

function createCounter() {
  let count = 0;

  let increment = () => {
    count += 1;
    return count;
  }
  let decrement = () => {
    count -= 1;
    return count;
  };

  return { increment, decrement };
}

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

let button = document.getElementById('counter')

button.addEventListener('click', function() {
  button.innerHTML = counter.increment()
});


// Hint: Use a closure to maintain the state of count.
// Open your console and console log your counter to see its status, i.e. -> console.log('counter status: ', counter.increment())
