document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("food-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const restaurantInput = document.getElementById("restaurant");
    const restaurantImageInput = document.getElementById("restaurant-image");
    const foodInput = document.getElementById("food");
    const ratingInput = document.getElementById("rating");

    const restaurantName = restaurantInput.value;
    const restaurantImageURL = restaurantImageInput.value;
    const foodName = foodInput.value;
    const rating = ratingInput.value;

    if (
      restaurantName.trim() === "" ||
      restaurantImageURL.trim() === "" ||
      foodName.trim() === "" ||
      isNaN(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      alert("Please enter valid values for all fields.");
      return;
    }

    addFoodToList(restaurantName, restaurantImageURL, foodName, rating);

    // Clear input fields
    restaurantInput.value = "";
    restaurantImageInput.value = "";
    foodInput.value = "";
    ratingInput.value = "";
  });

  function addFoodToList(restaurantName, restaurantImageURL, foodName, rating) {
    const foodList = document.getElementById("food-list");
    const li = document.createElement("li");
    li.classList.add("food-item");
    li.innerHTML = `
            <div>
                <img src="${restaurantImageURL}" alt="${restaurantName}" style="max-width: 100px; max-height: 100px;">
                <h3>Restaurant: ${restaurantName}</h3>
                <p>Food: ${foodName}</p>
                <p>Rating: ${rating}</p>
            </div>
        `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(removeButton);

    foodList.appendChild(li);
  }
});
