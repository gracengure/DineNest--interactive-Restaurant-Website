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
// Display dishes in the specified container
function displayDishes(dishes, containerId) {
  const container = document.getElementById(containerId); // Get the container element

  dishes.forEach((dish) => {
    // Iterate over each dish
    const dishDiv = document.createElement("div"); // Create a div for the dish
    dishDiv.className = "item"; // Add a class to the div

    // Create and append elements for dish name, image, description, price, and buttons
    const nameElement = document.createElement("h3");
    nameElement.textContent = dish.name; // Set dish name
    dishDiv.appendChild(nameElement);

    const imageElement = document.createElement("img");
    imageElement.src = dish.image;
    imageElement.alt = dish.name;
    dishDiv.appendChild(imageElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description";
    descriptionElement.textContent = dish.description;
    dishDiv.appendChild(descriptionElement);

    const priceElement = document.createElement("h4");
    priceElement.textContent = dish.price;
    dishDiv.appendChild(priceElement);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Basket";
    addButton.addEventListener("click", function () {
      addToBasket(dish);
    });
    dishDiv.appendChild(addButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "10px";
    removeButton.addEventListener("click", function () {
      removeFromBasket("ugali", dish.id);
      removeFromBasket("pizza", dish.id);
      removeFromBasket("variety", dish.id);
      removeFromBasket("rice", dish.id);
      removeFromBasket("stew", dish.id);
    });

    dishDiv.appendChild(removeButton);

    container.appendChild(dishDiv); // Append the dish div to the container
  });}