//Business Logic
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
            large: 12,
        };

        // Define the additional cost for each topping
        const toppingCost = 1.5;

        // Calculate the cost based on size and toppings
        let cost = sizeCosts[this.size] + this.toppings.length * toppingCost;

        return cost;
    };

    // Create an array to store the ordered pizzas
    const orderedPizzas = [];

    // Event listener for the Add Pizza button
    const addPizzaBtn = document.getElementById('add-pizza-btn');
    addPizzaBtn.addEventListener('click', function () {
        // Get the selected toppings
        const toppings = [];
        const checkboxes = document.querySelectorAll(
            'input[name="topping"]:checked'
        );
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

        // Update the order summary
        updateOrderSummary();
    });

    // Function to update the order summary
    function updateOrderSummary() {
        const orderSummary = document.getElementById('order-summary');
        orderSummary.innerHTML = '';

        // Display the ordered pizzas as links with dollar amounts
        orderedPizzas.forEach(function (pizza, index) {
            const pizzaLink = document.createElement('a');
            pizzaLink.textContent = `Pizza ${index + 1} - $${pizza
                .calculateCost()
                .toFixed(2)}`;
            pizzaLink.href = '#';
            pizzaLink.addEventListener('click', function () {
                displayPizzaDetails(index);
            });
            const listItem = document.createElement('li');
            listItem.appendChild(pizzaLink);
            orderSummary.appendChild(listItem);
        });
    }

    // Function to display the details of a specific pizza
    function displayPizzaDetails(pizzaIndex) {
        const pizza = orderedPizzas[pizzaIndex];
        console.log(`Pizza ${pizzaIndex + 1} Details:`);
        console.log('Toppings:', pizza.toppings);
        console.log('Size:', pizza.size);
    }

    // Event listener for the Delivery checkbox
    const deliveryCheckboxElement = document.getElementById('delivery-checkbox');
    deliveryCheckboxElement.addEventListener('change', function () {
        const addressSection = document.getElementById('address-section');
        const totalCostElement = document.getElementById('total-cost');

        if (this.checked) {
            addressSection.style.display = 'block';
            totalCostElement.textContent = `Total Cost: $${calculateTotalCost().toFixed(
                2
            )}`;
            console.log('Delivery option selected');
        } else {
            addressSection.style.display = 'none';
            totalCostElement.textContent = '';
            console.log('Delivery option deselected');
        }
    });

    // Event listener for the Calculate Cost button
    const calculateCostBtn = document.getElementById('calculate-cost-btn');
    calculateCostBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Calculate the total cost of the order
        const totalCost = calculateTotalCost();

        // Display the total cost
        const totalCostElement = document.getElementById('total-cost');
        totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
        console.log('Total Cost: $' + totalCost.toFixed(2));
    });

    // Function to calculate the total cost of the order
    function calculateTotalCost() {
        let totalCost = 0;

        // Calculate the cost for each pizza and sum them up
        orderedPizzas.forEach(function (pizza) {
            totalCost += pizza.calculateCost();
        });

        // Check if delivery is selected and add delivery cost
        const deliveryCheckbox = document.getElementById('delivery-checkbox');
        if (deliveryCheckbox.checked) {
            // Define the delivery cost
            const deliveryCost = 5;
            // Add delivery cost to the total cost
            totalCost += deliveryCost;
        }

        return totalCost;
    }

    // Order constructor
    function Order(pizzas) {
        this.pizzas = pizzas;
        console.log('Order object created:', this);
    }

    // Prototype method to calculate the total cost of an order
    Order.prototype.calculateTotalCost = function () {
        let totalCost = 0;

        // Calculate the cost for each pizza and sum them up
        this.pizzas.forEach(function (pizza) {
            totalCost += pizza.calculateCost();
        });

        return totalCost;
    };

    // Test the Pizza constructor and prototype method
    const myPizza = new Pizza(['anchovies', 'pineapple'], 'medium');
    console.log('Pizza constructor test:', myPizza);
    const pizzaCost = myPizza.calculateCost();
    console.log('Pizza calculateCost() test:', '$' + pizzaCost.toFixed(2));

    // Test the Order constructor and prototype method
    const myOrder = new Order([myPizza]);
    console.log('Order constructor test:', myOrder);
    const orderTotalCost = myOrder.calculateTotalCost();
    console.log('Order calculateTotalCost() test:', '$' + orderTotalCost.toFixed(2));
});
