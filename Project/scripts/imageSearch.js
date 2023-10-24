// Unsplash access key
const accessKey = "e80aHs9MAviUIZug4evKB4WEaKXNWEzwogEeiBuwj9Y";

// get all the elements from the html file
const searchForm = document.getElementById("search-form"); //to store the form section
const searchBox = document.getElementById("search-box"); //store input section
const searchResult = document.getElementById("search-result"); //store the images in the containers
const showMoreBtn = document.getElementById("show-more-btn"); //to store the value of the show more button

let keyword = ""; // this will store all the key words that the user will enter in the search input field
let page = "";

//for fetch and response we use async function
async function searchImages() {
    keyword = searchBox.value; // holds values from the input section
    // fetch data from the api using page number, keyword and access key
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=24`;

    const response = await fetch(url); //fetch images based on the query
    //after fetching all the query we are converting that response into json
    // format and all the json format data will be stored in the data variable 
    const data = await response.json();

    //and from that data we have to get results and the results will be stored in the results variable
    const results = data.results;

    if (page == 1) {
        searchResult.innerHTML = "";
    } else {
        page++;
    }

    // we are mapping those results and then pushing them into the following variables
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    // show more images 
    page++;
    showMoreBtn.style.display = "block";
    console.log(data);
};

const reset = () => {
    searchResult.innerHTML = "";
};

export { showMoreBtn, searchForm, page, searchImages, reset };