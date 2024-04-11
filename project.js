/*Section of menu*/
//fetch data from the db.json

fetch("http://localhost:3000/rice")
  .then((response) => response.json()) // Parse the JSON response
  .then((riceData) => {
    // Handle the data retrieved
    displayDishes(riceData, "rice-container"); // Display rice dishes in the "rice-container"
  });

fetch("http://localhost:3000/Pizza")
  .then((response) => response.json())
  .then((pizzaData) => {
    displayDishes(pizzaData, "pizza-container");
  });

fetch("http://localhost:3000/ugali")
  .then((response) => response.json())
  .then((ugaliData) => {
    displayDishes(ugaliData, "ugali-container");
  });

fetch("http://localhost:3000/stew")
  .then((response) => response.json())
  .then((stewData) => {
    displayDishes(stewData, "stew-container");
  });

fetch("http://localhost:3000/Pasta")
  .then((response) => response.json())
  .then((pastaData) => {
    displayDishes(pastaData, "pasta-container");
  });

fetch("http://localhost:3000/variety")
  .then((response) => response.json())
  .then((varietyData) => {
    displayDishes(varietyData, "variety-container");
  });

fetch("http://localhost:3000/Drinks")
  .then((response) => response.json())
  .then((drinksData) => {
    displayDrinks(drinksData, "drinks-container");
  });
