/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    templesElement.innerHTML = "";
    temples.forEach(temple => {

        const templeArticle = document.createElement('article');

        const templeNameH3 = document.createElement('h3');
        templeNameH3.innerHTML = temple.templeName;
        templeArticle.appendChild(templeNameH3);

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.setAttribute("alt", `${temple.location}`);
        templeArticle.appendChild(templeImage);

        const templeLocation = document.createElement('h4');
        templeLocation.innerHTML = temple.location;
        templeArticle.appendChild(templeLocation);

        const templeDedicated = document.createElement('h4');
        templeDedicated.innerHTML = temple.dedicated;
        templeArticle.appendChild(templeDedicated);

        templesElement.appendChild(templeArticle);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    data = await response.json();
    templeList.push(...data);
    //console.log(response);
    displayTemples(templeList);
    //console.log(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabhetically":
            displayTemples(temples.sort((temple1, temple2) => (temple1.templeName > temple2.templeName) ? 1 : -1));
            break;
        default:
            displayTemples(temples);
    };
};


/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => { sortBy(templeList); });

getTemples();
