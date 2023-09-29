/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;

};

function addNumbers() {
    const addNumber1 = Number(document.querySelector("#add1").value);
    const addNumber2 = Number(document.querySelector("#add2").value);
    const sum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = sum;

    console.log("First number: ", addNumber1);
    console.log("Second number: ", addNumber2);
    console.log("Sum: ", sum);
};

document.querySelector("#addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    const difference = number1 - number2;
    return difference;
};

function subtractNumbers() {
    const subtractNumber1 = Number(document.querySelector("#subtract1").value);
    const subtractNumber2 = Number(document.querySelector("#subtract2").value);
    const difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector("#difference").value = difference;

    console.log("First number: ", subtractNumber1);
    console.log("Second number: ", subtractNumber2);
    console.log("Difference: ", difference);
};

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    const product = number1 * number2;
    return product;
};

const multiplyNumbers = () => {
    const factorNumber1 = Number(document.querySelector("#factor1").value);
    const factorNumber2 = Number(document.querySelector("#factor2").value);
    const product = multiply(factorNumber1, factorNumber2);
    document.querySelector("#product").value = product;

    console.log("First number: ", factorNumber1);
    console.log("Second number: ", factorNumber2);
    console.log("Product: ", product);
};

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    const quotient = number1 / number2;
    return quotient;
};

const divideNumbers = () => {
    const dividend = Number(document.querySelector("#dividend").value);
    const divisor = Number(document.querySelector("#divisor").value);
    const quotient = divide(dividend, divisor);
    document.querySelector("#quotient").value = quotient;

    console.log("First number: ", dividend);
    console.log("Second number: ", divisor);
    console.log("Quotient: ", quotient);
};

document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */
const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let currentDateAndTime = `${day}-${month}-${year}`;
console.log(`It is now ${currentDateAndTime}`);

document.getElementById("year").innerHTML = currentDateAndTime;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
let odds = numbersArray.filter((num) => num % 2 === 1);
document.getElementById("odds").innerHTML = odds;

/* Output Evens Only Array */
let evens = numbersArray.filter((num) => num % 2 === 0);
document.getElementById("evens").innerHTML = evens;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.getElementById("multiplied").innerHTML = multiplied;


/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.map(number => number * 2);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;

