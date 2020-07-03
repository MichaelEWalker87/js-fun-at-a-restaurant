function nameMenuItem(menuItem) {
  return `Delicious ${menuItem}`
}
// made funtion added paramitor the return the srting



function createMenuItem(itemName, price, foodType){
  var menuItem = {
    name: itemName,
    price: price,
    type: foodType,
  }
  return menuItem
}
// made funtion with 3 paramitors, made an object litteral the holds 3 values
//returned the object literal

function addIngredients(ingredient1, ingredient2){
    if (!ingredient2.includes(ingredient1)){
      ingredient2.push(ingredient1);
    }
}
/* made funtrion addIngredients added 2 paramitors
  used the push to add the ingredient1 to the array ingredient2
*/

function formatPrice(initialPrice){
    return `\$${initialPrice}`
}
/*made a function formatPrice added a paramitor
returned paramitor with $ added to number
*/
//note to self: remember to go slow like Orlando said

function decreasePrice(discount){
  return discount * .9
}

function createRecipe(title, ingredients , menuItemType){
  var brunch = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return brunch
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
