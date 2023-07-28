/*Given an array. Determine whether it consists only from uniques or not.*/
let array = [1, 5, 8, 8]
let anotherarray = [4, 5, 9, 7]

function checkUniques(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true

      }


    }
  }
  return false;
}
console.log(checkUniques(anotherarray));


/*2. Given an array of integers. All numbers are unique. Find the count of missing numbers
between minimum and maximum elements to make integers sequence.*/

let a = [2, 5, 8, 11,9];

function findMissingnum(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  let sequanceArr = [];
  for (let i = min; i <= max; i++) {
    sequanceArr.push(i);
  }

  let missingNumb = [];
  for (let num of sequanceArr) {
    if (!arr.includes(num)) {
      missingNumb.push(num);
    }
  }

  let count = missingNumb.length;
  return count;
}

console.log(findMissingnum(a));

/*3. Write a constructor function called CoffeeShop, which has three instance properties:
1. name : a string (basically, of the shop)
2. menu : an array of items (of object type), with each item containing the item (name
of the item), type (whether food or a drink) and price.
3. orders : an empty array
and seven methods:
1. addOrder: adds the name of the item to the end of the orders array if it exists on the
menu. Otherwise, return &quot;This item is currently unavailable!&quot;
2. fulfillOrder: if the orders array is not empty, return &quot;The {item} is ready!&quot;. If the
orders array is empty, return &quot;All orders have been fulfilled!&quot;
3. listOrders: returns the list of orders taken, otherwise, an empty array.
4. dueAmount: returns the total amount due for the orders taken.
5. cheapestItem: returns the name of the cheapest item on the menu.
6. drinksOnly: returns only the item names of type drink from the menu.
7. foodOnly: returns only the item names of type food from the menu.
IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.*/
function CoffeeShop(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  
    this.addOrder = function(item) {
      if (this.menu.includes(item)) {
        this.orders.push(item);
      } else {
        return "This item is currently unavailable";
      }
    };
  
    this.fulfillOrder = function() {
      if (this.orders.length !== 0) {
        let item = this.orders.shift();
        return `The ${item} is ready`;
      } else {
        return "All orders are fulfilled";
      }
    };
  
    this.listOrder = function() {
      return this.orders;
    };
  
    this.dueAmount = function() {
      const itemprices = {};
      for (let menuItem of this.menu) {
        itemprices[menuItem.item] = menuItem.price;
      }
      let totalamount = 0;
      for (let order of this.orders) {
        if (itemprices[order] !== undefined) {
          totalamount += itemprices[order];
        }
      }
      return totalamount;
    };
  
    this.cheapestItem = function() {
      let cheapest = this.menu[0];
      for (let i = 1; i < this.menu.length; i++) {
        if (this.menu[i].price < cheapest.price) {
          cheapest = this.menu[i];
        }
      }
      return cheapest;
    };
  
    this.drinksOnly = function() {
      let drinkItems = [];
      for (let menuItem of this.menu) {
        if (menuItem.type.toLowerCase() === "drink") {
          drinkItems.push(menuItem.item);
        }
      }
      return drinkItems;
    };
  
    this.foodOnly = function() {
      let foodItems = [];
      for (let foodItem of this.menu) {
        if (foodItem.type.toLowerCase() === "food") {
          foodItems.push(foodItem.item);
        }
      }
      return foodItems;
    };
  }
  
  let coffeeName = "Sunshine";
  let coffeeMenu = [
    { item: "Americano", type: "Drink", price: "$4" },
    { item: "Muffin", type: "Food", price: "$4" },
    { item: "Blacktea", type: "drink", price: "$3" }
  ];
  let a = new CoffeeShop(coffeeName,coffeeMenu)
  let b = a.drinksOnly();
  console.log(b)
  