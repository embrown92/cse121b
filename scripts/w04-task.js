/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Eda Mae Brown",
    age: 31,
    photo: "./images/profile.png",
    favoriteFoods: [
        "Mango Cheesecake",
        "Chicken Adobo",
        "Fettucini Alfredo",
        "Stuffed Gnocchi",
        "Original Glazed Donuts"
    ],
    hobbies: [
        "cooking",
        "baking",
        "photography",
        "nature walks"
    ],
    placesLived: [
    ],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Cebu, Philippines',
        length: '23 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Orlando, FL',
        length: '6 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Waco, TX',
        length: '1 year and 6 months'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let imageElement = document.querySelector("img").src = myProfile.photo;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let placeName = document.createElement('dt');
    let length = document.createElement('dd');

    placeName.textContent = place.place;
    length.textContent = place.length;

    document.querySelector('#places-lived').appendChild(placeName);
    document.querySelector('#places-lived').appendChild(length);
    console.log(myProfile.placesLived);

});

