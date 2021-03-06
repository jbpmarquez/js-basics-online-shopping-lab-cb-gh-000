var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var itemToBuy = {};
  var price = Math.floor(Math.random() * 100);
  itemToBuy[item] = price
  cart.push(itemToBuy)
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemsAndPrices = [];
     for (var i in cart){
       var itemAndPrice = cart[i];
       for (var key in itemAndPrice){
         itemsAndPrices.push(key + " at $" + itemAndPrice[key])
       }
     }
     var cartItems = itemsAndPrices.join(", ");
     console.log("In your cart, you have " + cartItems + ".")
   }
 }


 function removeFromCart(item) {
   var itemInCart = false
   for(var i = 0; i < cart.length; i++){
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true;
       cart.splice(i, 1);
     }
   }
   if (!itemInCart) {
     console.log("That item is not in your cart.");
   }
   return cart
}

function placeOrder(creditCard) {
   if (!creditCard) {
     console.log("We don't have a credit card on file for you to place your order.");
   } else {
     console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
     cart = [];
   }
}
