/* Menu items counter */
const itemCounters = {
  "Strawberry Cream Dessert": 0,
  "Chees Burger with french fries": 0,
  "Cold Beverages Coffee": 0,
  "Hot Beverages Coffee": 0,
  "Absolut Strawberry Lemonade": 0,
  "Special King Cafe Combo": 0,
};

// Get all "Add me" buttons and the shopping cart button
const addButtons = document.querySelectorAll(".menu-item button");
const cartButton = document.querySelector(".fa-cart-shopping");

// Create a container for the list of items
const itemListContainer = document.createElement("div");
itemListContainer.style.position = "fixed";
itemListContainer.style.top = "70px";
itemListContainer.style.right = "30px";
itemListContainer.style.backgroundColor = "white";
itemListContainer.style.padding = "10px";
itemListContainer.style.border = "1px solid #ccc";
itemListContainer.style.borderRadius = "5px";
itemListContainer.style.display = "none";
itemListContainer.style.maxWidth = "250px";
itemListContainer.style.overflowY = "auto";
document.body.appendChild(itemListContainer);

// Create the "Remove" button
const removeButton = document.createElement("button");
removeButton.textContent = "Remove List";
removeButton.style.display = "block";
removeButton.style.maxWidth = "150px";
removeButton.style.height = "30px";
removeButton.style.backgroundColor = "black";
removeButton.style.color = "white";
removeButton.style.borderRadius = "20px";
removeButton.style.marginTop = "10px";
removeButton.style.paddingTop = "5px";
removeButton.style.paddingLeft = "10px";
removeButton.style.paddingRight = "10px";
removeButton.style.paddingBottom = "10px";
itemListContainer.appendChild(removeButton);

// Function to update and display the counter
function updateCounter(itemName) {
  itemCounters[itemName]++;
}

// Function to show the counter display when the cart button is clicked
function showCounter() {
  itemListContainer.style.display = "block";

  // Clear the container except the remove button
  itemListContainer.innerHTML = "<strong> Order list:</strong><br>";

  // Generate the display content
  for (const item in itemCounters) {
    if (itemCounters[item] > 0) {
      itemListContainer.innerHTML += `${item}: ${itemCounters[item]} items<br>`;
    }
  }

  // Append the remove button again
  itemListContainer.appendChild(removeButton);
}

// Function to clear the item list
function clearItemList() {
  for (const item in itemCounters) {
    itemCounters[item] = 0;
  }
  itemListContainer.style.display = "none";
}

// Add event listeners to all "Add me" buttons
addButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const itemName = this.previousElementSibling.textContent;
    updateCounter(itemName);
  });
});

// Add event listener to the shopping cart button
cartButton.addEventListener("click", showCounter);

// Add event listener to the "Remove" button
removeButton.addEventListener("click", clearItemList);

/* form popup*/
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(
    "Thank you for reaching out! Your data is successfully stored. And you are member of King cafe team.! 😊"
  );
});

/*suscribe button popup*/
const subscribeButton = document.getElementById("Subscribe-button");

subscribeButton.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for subscribing! We are thrilled to have you with us. 😊");
});
