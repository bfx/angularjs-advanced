/**
 *
 */

angular.module('orders', []);

angular.module('orders').service("OrderService", function() {
    var order = this.empty();
    
    this.add = function(pizza)
    {
        order.items.push(pizza);
        order.pizzaCount = order.pizzaCount + 1;
        order.totalPrice =order.totalPrice + pizza.price; //TODO REFACTOR
    }
    this.getOrder = function (){
        return order;
    };
    
    this.empty = function (){
        order = {
        pizzaCount : 0,
        items : [],
        totalPrice : 0
        }; 
    };
});

angular.module('orders').controller("OrderCtrl", function(OrderService) {
    this.order = OrderService.getOrder();
    
    this.empty = function()
    {
        OrderService.empty();
    }
});

angular.module('orders').controller("AddOrderCtrl", function(OrderService) {

    this.add = function(pizza)
    {
        OrderService.add(pizza);
    }
});

