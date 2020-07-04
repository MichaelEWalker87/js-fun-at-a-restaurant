function nameMenuItem(menuItem) {
  return `Delicious ${menuItem}`
}
// declared funtion added paramitor the return the srting



function createMenuItem(itemName, price, foodType){
  var menuItem = {
    name: itemName,
    price: price,
    type: foodType,
  }
  return menuItem
}
// declared funtion with 3 paramitors, made an object litteral the holds 3 values
//returned the object literal

function addIngredients(ingredient1, ingredientArray){
    if (!ingredientArray.includes(ingredient1)){
      ingredientArray.push(ingredient1);
    }
}
/* declared function addIngredients added 2 paramitors
  used the push to add the ingredient1 to the array ingredientArray
  used an if statment and the bang operator to say if
  includes1 does not equal anything
  in array ingredientArray then push the element to the array
  ingredientArray
*/

function formatPrice(initialPrice){
    return `\$${initialPrice}`
}
/*declared a function formatPrice added a paramitor
returned string paramitor with $ added to number
*/
//note to self: remember to go slow like Orlando said

function decreasePrice(discount){
  return discount * .9
}
//declared a funtion add paramitor that multiples by .9

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
