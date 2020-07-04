
function createRestaurant(name){
  return{
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}
// declared a funtion createRestaurant returned
// property of name and returned name
//need to add an object menus which holds 3 properties
//breakfast, lunch and dinner and set to an empty array

function addMenuItem(rest, item){

  if (!rest.menus[item.type].includes(item)) {
  rest.menus[item.type].push(item)
}
};

/* same idea as commented out below but useing bracket notion
the bracket will sreach the type string for menus match and then push to the array
once match is found
   note to self : bracket notation will search for a what you put inside the bracket
   simular to dot notion in a way rest.menus.breakfast === rest.menus['breakfast']
then used the bang operator to check to see if
rest.menus["whichever varable"] included item
if it does not include item then push item to array
rest.menus['breakfast'] or which ever array applies
*/

/*
function addMenuItem(rest, item){
  var arrItem = [];

  if (item.type === 'lunch'){
    rest.menus.lunch.push(item);
}
  if(item.type === 'breakfast'){
    rest.menus.breakfast.push(item);
  }
  if(item.type === 'dinner'){
    rest.menus.breakfast.push(item);
  }
}
*/
//should be able to add item to lunch array
//decleard function addMenuItem and added 2 paramitors
//needs to add object BBQ Chicken to lunch
// To access I need to use dot notation on createRestaurant
//if type === dinner... push the the array
//


|



// function removeMenuItem(rest2, item2, meal){
//   if (meal === undefined){
//     meal = 'dinner'
//   }
//
//   if (rest2.menus[meal].includes(item2)){
//     rest2.menus[meal].splice(item2, 1);
//   return `No one is eating our ${item2} \- it has been removed from the ${meal} menu\!`
//   } else {
//     return `Sorry, we don't sell ${item2}, try adding a new recipe\!`
//   }
// }



// function removeMenuItem(rest2, item2, meal){
//   for (var i = 0; i < rest2.menus[meal].length; i++){
//   if (meal === undefined){
//     return `Sorry, we don't sell ${item2}, try adding a new recipe\!`
//   }else
//     (rest2.menus[meal][i] === item2){
//     rest2.menus[meal].splice(item2, 1);
//     return `No one is eating our ${item2} \- it has been removed from the ${meal} menu\!`
//   }//else{
//     //return `Sorry, we don't sell ${item2}, try adding a new recipe\!`
//   }
// }
//
// }

//if (rest2.menus[meal].includes(item2)){

//think i will use the splice method to remove an item
//

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
