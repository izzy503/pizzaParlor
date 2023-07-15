window.addEventListener('DOMContentLoaded', function() {
    // Pizza constructor
    function Pizza(toppings, size) {
      this.toppings = toppings;
      this.size = size;
      console.log('Pizza object created:', this);
    }
  