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
  });
}

// Display drinks in the specified container
function displayDrinks(drinks, containerId) {
  const container = document.getElementById(containerId);

  drinks.forEach((drink) => {
    const drinkDiv = document.createElement("div");
    drinkDiv.className = "item";

    // Create and append elements for drink name, image, description, price, and buttons
    const nameElement = document.createElement("h3");
    nameElement.textContent = drink.name;
    drinkDiv.appendChild(nameElement);

    const imageElement = document.createElement("img");
    imageElement.src = drink.image;
    imageElement.alt = drink.name;
    drinkDiv.appendChild(imageElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description";
    descriptionElement.textContent = drink.description;
    drinkDiv.appendChild(descriptionElement);

    const priceElement = document.createElement("h4");
    priceElement.textContent = drink.price;
    drinkDiv.appendChild(priceElement);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Basket";
    addButton.addEventListener("click", function () {
      addToBasket(drink);
    });
    drinkDiv.appendChild(addButton);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "10px";
    removeButton.addEventListener("click", function () {
      removeFromBasket("Drinks", drink.id);
    });
    drinkDiv.appendChild(removeButton);

    container.appendChild(drinkDiv);
  });
}

// Function to add item to basket
function addToBasket(item) {
  alert(`You have selected: ${item.name}`); // Display an alert with the selected item name
}
/* The DELETE metheod that delete items from the  server*/
// Function to remove item from basket
function removeFromBasket(type, id) {
  return fetch(`http://localhost:3000/${type}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
}

// Filter dishes by food type
document.addEventListener("DOMContentLoaded", () => {
  const filterButton = document.getElementById("filter-button");

  filterButton.addEventListener("click", () => {
    const foodType = document
      .getElementById("food-type-input")
      .value.toLowerCase();
    filterByFoodType(foodType);
  });
});

// Function to filter dishes by food type
function filterByFoodType(type) {
  const containers = [
    "rice-container",
    "pizza-container",
    "ugali-container",
    "pasta-container",
    "stew-container",
    "variety-container",
    "drinks-container",
  ];

  containers.forEach((containerId) => {
    const items = document
      .getElementById(containerId)
      .querySelectorAll(".item");

    items.forEach((item) => {
      const nameElement = item.querySelector("h3");
      const name = nameElement.textContent.toLowerCase();

      if (name.includes(type)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}

// Initialize audio and button functionality
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector("audio"); // Select the audio element
  const playButton = document.getElementById("playAudioButton"); // Select the "Play Audio" button

  // Add click event listener to the "Play Audio" button
  playButton.addEventListener("click", function () {
    if (audio.paused) {
      // If audio is paused, play it
      audio.play();
      playButton.textContent = "Pause Audio"; // Change button text to "Pause Audio"
    } else {
      // If audio is playing, pause it
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
      playButton.textContent = "Play Audio"; // Change button text to "Play Audio"
    }
  });
});

function updateInformation() {
  const name = document.getElementById("updateName").value;
  const price = document.getElementById("updatePrice").value;
  const description = document.getElementById("updateDescription").value;

  const data = {
    name: name,
    price: price,
    description: description,
  };
  /*The POST method that update information to the server*/
  fetch("http://localhost:3000/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
function toggleForm() {
  const form = document.getElementById("updateForm");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
/*Section of Feedback*/
document
  .getElementById("submitFeedback")
  .addEventListener("click", function () {
    alert("Submitted Successful!");
  });

document.getElementById("click").addEventListener("click", function () {
  alert("Submitted Successful!");
});
