window.addEventListener('DOMContentLoaded', function () {
    // Pizza constructor
    function Pizza(toppings, size) {
        this.toppings = toppings;
        this.size = size;
        console.log('Pizza object created:', this);
    }
    // Prototype method to calculate the cost of a pizza
    Pizza.prototype.calculateCost = function () {
        // Define the base cost for each size
        const sizeCosts = {
            small: 8,
            medium: 10,
            large: 12
        };

        // Define the additional cost for each topping
        const toppingCost = 1.5;

        // Calculate the cost based on size and toppings
        let cost = sizeCosts[this.size] + (this.toppings.length * toppingCost);

        return cost;
    };

    // Create an array to store the ordered pizzas
    const orderedPizzas = [];

    // Event listener for the Add Pizza button
    const addPizzaBtn = document.getElementById('add-pizza-btn');
    addPizzaBtn.addEventListener('click', function () {
        // Get the selected toppings
        const toppings = [];
        const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
        checkboxes.forEach(function (checkbox) {
            toppings.push(checkbox.value);
        });

        // Get the selected size
        const sizeRadios = document.getElementsByName('size');
        let size = '';
        sizeRadios.forEach(function (radio) {
            if (radio.checked) {
                size = radio.value;
            }
        });

        // Create a new pizza object
        const pizza = new Pizza(toppings, size);
        console.log('Pizza added:', pizza);

        // Add the pizza to the ordered pizzas array
        orderedPizzas.push(pizza);

        // Display the ordered pizzas as links
        const orderSummary = document.getElementById('order-summary');
        const pizzaIndex = orderedPizzas.length - 1;
        const pizzaLink = document.createElement('a');
        pizzaLink.textContent = `Pizza ${pizzaIndex + 1}`;
        pizzaLink.href = '#';
        pizzaLink.addEventListener('click', function () {
            displayPizzaDetails(pizzaIndex);
        });
        const listItem = document.createElement('li');
        listItem.appendChild(pizzaLink);
        orderSummary.appendChild(listItem);
    });

    // Function to display the details of a specific pizza
    function displayPizzaDetails(pizzaIndex) {
        const pizza = orderedPizzas[pizzaIndex];
        console.log(`Pizza ${pizzaIndex + 1} Details:`);
        console.log('Toppings:', pizza.toppings);
        console.log('Size:', pizza.size);
    }

    // Event listener for the Delivery checkbox
    const deliveryCheckbox = document.getElementById('delivery-checkbox');
    deliveryCheckbox.addEventListener('change', function () {
        const addressSection = document.getElementById('address-section');
        if (this.checked) {
            addressSection.style.display = 'block';
            console.log('Delivery option selected');
        } else {
            addressSection.style.display = 'none';
            console.log('Delivery option deselected');
        }
    });

    // Event listener for the Calculate Cost button
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', function () {
        // Get the selected toppings
        const toppings = [];
        const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
        checkboxes.forEach(function (checkbox) {
            toppings.push(checkbox.value);
        });

        // Get the selected size
        const sizeRadios = document.getElementsByName('size');
        let size = '';
        sizeRadios.forEach(function (radio) {
            if (radio.checked) {
                size = radio.value;
            }
        });

        // Create a new pizza object
        const pizza = new Pizza(toppings, size);
        console.log('Selected Pizza:', pizza);

        // Calculate the cost
        const cost = pizza.calculateCost();
        console.log('Cost:', cost);

        // Create a new order with the pizza
        const order = new Order([pizza]);
        console.log('Created Order:', order);

        // Display the result
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Total Cost: $${totalCost}`;

        // Check if delivery is selected and display address if applicable
        const deliveryCheckbox = document.getElementById('delivery-checkbox');
        if (deliveryCheckbox.checked) {
            const addressInput = document.getElementById('address');
            console.log('Delivery Address:', addressInput.value);
        }
    });

    // Order constructor
    function Order(pizzas) {
        this.pizzas = pizzas;
        console.log('Order object created:', this);
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Total Cost: $${totalCost}`;

    // Check if delivery is selected and display address if applicable
    const deliveryCheckbox = document.getElementById('delivery-checkbox');
    if (deliveryCheckbox.checked) {
        const addressInput = document.getElementById('address');
        console.log('Delivery Address:', addressInput.value);
    }
});

// Order constructor
function Order(pizzas) {
    this.pizzas = pizzas;
    console.log('Order object created:', this);
}

// Prototype method to calculate the total cost of an order
Order.prototype.calculateTotalCost = function () {
    let totalCost = 0;

    //Calculate the cost for each pizza and sub them up
    this.pizzas.forEach(function (pizza) {
        totalCost += pizza.calculateCost();
    });

    return totalCost;
};

// Test Pizza Constructor
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
console.log(cost);
// Expected Output: The calculated cost of the pizza

// Test Order Constructor
const pizza1 = new Pizza(["cheese" , "pepperoni"], "large");