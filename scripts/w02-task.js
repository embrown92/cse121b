/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Eda Mae Brown";

const currentYear = new Date();
let year = currentYear.getFullYear();

const profilePicture = "/images/profile.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = `Current Year: ${yearElement}`;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}.`);

/* Step 5 - Array */
let faveFood = ['Mango Cheesecake', 'Chicken Adobo', 'Fettucini Alfredo', 'Stuffed Gnocchi', 'Original Glazed Donuts'];
//document.getElementById("food").innerHTML = faveFood;
foodElement.innerHTML = `${faveFood}`;

faveFood.push('Pollo Asado Burrito Bowl');
foodElement.innerHTML += `<br><br>${faveFood}`;

faveFood.shift();
foodElement.innerHTML += `<br><br>${faveFood}`;

faveFood.pop();
foodElement.innerHTML += `<br><br>${faveFood}`;







