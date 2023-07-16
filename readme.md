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
Feel free to customize the HTML and CSS files to match your preferred styling and design.

# Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

# License

This project is licensed under the BSD-2-Clause License. See the LICENSE file for details.

For any issues or concerns, please contact me at ipadilla2280@gmail.com.

© July 16, 2023, Israel Padilla

***Please note that this is just a sample README.md file created for this project, and you may need to modify it further to suit your specific project and requirements.***