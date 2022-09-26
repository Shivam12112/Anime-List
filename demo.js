// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // function to check even numbers
// function checkEven(number) {
//   if (number % 2 == 0)
//     return true;
//   else
//     return false;
// }

// // create a new array by filter even numbers from the numbers array
// let evenNumbers = numbers.filter(checkEven);
// console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]

const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

function checkPrice(element) {
  return element > 2000 || Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// using arrow function
let newPrices = prices.filter((price) => price > 2000 && !Number.isNaN(price));
console.log(newPrices); // [ 3000, 5000, 8000 ]
