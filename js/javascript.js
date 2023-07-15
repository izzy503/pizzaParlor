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