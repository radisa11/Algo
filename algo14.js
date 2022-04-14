// Use the generateCoinChange function below to receive a dollar (decimal) amount with change. 
// Covert that value to the number of quarters, dimes, nickels, and pennies it would have.
// It should count the number or quarters first then work it's way down from there
// This can return a string or an object or whatever you'd like

// Example: generateCoinChange(.67) would return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies
var qCuont = 0;
var dCuont = 0;
var nCuont = 0;
var pCuont = 0;
function generateCoinChange(input) {
    input *= 100;
    while (input > 0) {
        if (input > 25) {
            input -= 25;
            qCuont++;
        }
        if (input > 10) {
            input -= 10;
            dCuont++
        }
        if (input > 5) {
            input -= 5;
            nCuont++;
        }
        else {
            input -= 1;
            pCuont++;
        }
    }
    console.log(qCuont, dCuont, nCuont, pCuont)
}

console.log(generateCoinChange(.67))
// console.log(generateCoinChange(0.77))
// console.log(generateCoinChange(2.85))
// console.log(generateCoinChange(4.57))