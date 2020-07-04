
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





function removeMenuItem(rest2, item2, meal = 'dinner'){
  var pos
  for (var i = 0; i < rest2.menus[meal].length; i++){
    if (rest2.menus[meal][i].name === item2){
      pos = i
    }
  }
  if (pos !== undefined){
      rest2.menus[meal].splice(pos, 1);
      return `No one is eating our ${item2} \- it has been removed from the ${meal} menu\!`
  } else {
      return `Sorry, we don't sell ${item2}, try adding a new recipe\!`
  }
}


// decleared a funtion set to 3 paramitors where meal if undefined is set to dinner
//declared var pos and left undefined
//ran a for loop the run trhough breakfast lunch or dinner array
//if at any time the name at value is === item2 then set pos to the value of i
    //orginally this had 2 var one for i and on to change to true but I was able to make pos byitself work
//in my next block of code
// if pos does not equal undefined then
// splice at postion of pos number which will be the number of index in array remove one item
//then return string
//if pos is undefined then it will return the other string  






//I wanted to walk thorugh my thought process unfortunatly I lost some of my eailer
// work on this.
//I started useing the .includes to get things going but includes but I was not pulling the right
// index I was able to get 2 test to pass but not all 3 at once
// then as seen in the code below I did an if meal is undefined which it is then
//return `Sorry, we don't sell ${item2}, try adding a new recipe\!`
// as seen with the code below which will work but it was not realy what I wanted
// I did som refactoring and ended with the code above


// function removeMenuItem(rest2, item2, meal){
//   for (var i = 0; i < rest2.menus[meal].length; i++){
//     if (meal === undefined){
//       return `Sorry, we don't sell ${item2}, try adding a new recipe\!`
//     }else if (rest2.menus[meal][i] === item2) {
//       rest2.menus[meal].splice(item2, 1);
//       return `No one is eating our ${item2} \- it has been removed from the ${meal} menu\!`
//     }
//   }
// }



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
