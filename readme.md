# pizzaParlor

This is a simple web application for a pizza company where users can choose individual toppings and size for their pizza and see the final cost. It allows users to customize their pizza order and calculates the cost based on their selections.

# Features

Choose one or more toppings for the pizza.
Select a size for the pizza.
See the final cost of the pizza based on the toppings and size.

# Technologies Used

HTML
CSS
JavaScript
Usage

# Clone the repository:

git clone hhttps://github.com/izzy503/pizzaParlor.git

1. Open the index.html file in your web browser.
2. Select the desired toppings by checking the checkboxes.
3. Choose a size for the pizza by selecting a radio button.
4. Click the "Calculate Cost" button.
5. The total cost of the pizza will be displayed on the page.

# Known Bugs

None found.

# Customization

You can customize the toppings, sizes, and cost calculation by modifying the JavaScript code in the javascript.js file. Update the topping options, size options, and the formula for calculating the cost in the Pizza constructor and calculateCost prototype method.
// Example modification in the Pizza constructor
function Pizza(toppings, size) {
  // Add or modify the toppings and size options here
  this.toppings = toppings;
  this.size = size;
}

// Example modification in the calculateCost prototype method
Pizza.prototype.calculateCost = function() {
  // Modify the formula for calculating the cost here
  // based on the toppings and size selected
  let cost = 0;

  // Your custom calculation logic goes here

  return cost;
};
